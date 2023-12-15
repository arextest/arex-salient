import { StarOutlined } from '@ant-design/icons';
import { Button, ConfigProvider, Space, theme } from 'antd';
const { useToken } = theme;
const AppNav = () => {
  const { token } = useToken();
  return (
    <nav
      className={'flex justify-between h-[60px] items-center px-[16px] bg-white'}
      style={{ borderBottom: `1px solid ${token.colorBorder}` }}
    >
      <ConfigProvider>
        <div className={'text-2xl font-bold cursor-pointer'} onClick={()=>{
          location.href = '/home'
        }}>Arex</div>

        <Space>
          <Button type={'text'} href={'https://arextest.com/'} target={'_blank'}>Docs</Button>

          {/*<Button type={'text'}>Tools</Button>*/}

          <Button type={'text'} href={'/pricing'}>Pricing</Button>

          <Button type={'text'} href={'https://github.com/arextest'} target={'_blank'}>
            <StarOutlined />
            Star Us on Github
          </Button>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#000',
              },
            }}
          >
            <Button type={'primary'} href={'/signup'}>Sign Up</Button>
          </ConfigProvider>

          <Button type={'text'} href={'/login'}>Log in</Button>
        </Space>
      </ConfigProvider>
    </nav>
  );
};

export default AppNav;
