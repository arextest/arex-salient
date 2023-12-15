import {
  AppstoreOutlined,
  LogoutOutlined,
  MailOutlined,
  MoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, ConfigProvider, Dropdown, Menu, MenuProps, theme, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

const { useToken } = theme;
const { Text } = Typography;

const items: MenuProps['items'] = [
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <MailOutlined />,
  },
  {
    label: 'Projects',
    key: 'projects',
    icon: <AppstoreOutlined />,
  },
];
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

function Index() {
  useEffect(() => {
    // console.log(localStorage.getItem('user'))
    if (localStorage.getItem('user') === null) {
      nav('/login');
    }
  }, []);
  const loc = useLocation();
  const nav = useNavigate();
  const selectedKey = useMemo(() => {
    if (loc.pathname === '/') {
      return 'dashboard';
    } else {
      return loc.pathname.replace('/', '');
    }
  }, [loc.pathname]);
  const [count, setCount] = useState(0);
  const { token } = useToken();
  const meData = (() => {
    try {
      console.log(JSON.parse(localStorage.getItem('user') || '{}'));
      return JSON.parse(localStorage.getItem('user') || '{}');
    } catch (e) {
      return {};
    }
  })();
  const dropdownItems = [
    getItem('个人设置', 'settings', <SettingOutlined />),
    {
      key: '3',
      type: 'divider',
    },
    getItem('登出', 'logout', <LogoutOutlined />),
  ];
  const dropdownClick = ({ key }: any) => {
    if (key === 'logout') {
      localStorage.clear();
      window.location.href = '/login';
    }
    if (key === 'settings') {
      // window.location.href = '/settings';
      nav(`/settings`);
    }
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0081f1',
        },
      }}
    >
      <div className={'flex'}>
        <div
          className={'w-[260px] h-[100vh] fixed overflow-hidden flex flex-col'}
          style={{ borderRight: `1px solid ${token.colorBorder}` }}
        >
          <div className={'px-3 pt-3'}>
            <span className={'text-2xl font-bold'}>Arex</span>
          </div>

          <Menu
            onSelect={(selectInfo) => {
              if (selectInfo.key === 'dashboard') {
                nav('/');
              } else {
                nav(selectInfo.key);
              }
            }}
            selectedKeys={[selectedKey]}
            // selectedKeys={['mail']}
            items={items}
            className={''}
            style={{ flex: '1' }}
          />

          <Dropdown menu={{ items: dropdownItems, onClick: dropdownClick }}>
            <div
              className={
                'h-[77px] py-[16px] px-[16px] flex items-center justify-between cursor-pointer'
              }
              style={{ borderTop: `1px solid ${token.colorBorder}` }}
            >
              <Avatar src={'https://xsgames.co/randomusers/avatar.php?g=pixel&key=1'}></Avatar>
              <div className={'flex flex-col'}>
                <Text>{meData?.username}</Text>
                <Text type={'secondary'}>{meData?.email}</Text>
              </div>
              <MoreOutlined />

              {/*<DownOutlined />*/}
            </div>
          </Dropdown>
        </div>

        <div className={'w-[260px]'}></div>

        <div className={'flex-1 bg-[#fbfcfd] min-h-[100vh]'}>
          <Outlet />
        </div>
      </div>

      {/*<Button type={'primary'}>colorPrimary</Button>*/}
    </ConfigProvider>
  );
}

export default Index;
