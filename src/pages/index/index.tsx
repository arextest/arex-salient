import Icon, {
  ArrowRightOutlined,
  DownloadOutlined,
  HighlightOutlined,
  MoreOutlined,
  ShakeOutlined,
  ToTopOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { Alert, Avatar, Button, Card, Empty, List, theme, Typography } from 'antd';
import { useNavigate } from 'react-router';

import ClarityTagSolid from '~icons/ep/top-right';
// https://icon-sets.iconify.design/fluent-mdl2/completed-solid/
// <CheckCircleOutlined />
// https://icon-sets.iconify.design/emojione-monotone/hollow-red-circle/
import Ssf from '~icons/fluent-mdl2/completed-solid';

import appjssvg from '../../assets/appjs.svg';
import { IconHollowCircleSvg } from '../../components/svg/HollowCircle.tsx';

const data = ['Arex-UI', 'Arex-schedule', 'Arex-api', 'Arex-storage'];

const { useToken } = theme;
const { Text } = Typography;
const Index = () => {
  const { token } = useToken();
  const nav = useNavigate();
  return (
    <div className={'mx-auto grid w-full max-w-[1248px] items-center px-6 pb-2 pt-8'}>
      <div
        style={{ background: `url(${appjssvg}),linear-gradient(#03c,#03c)` }}
        className='px-6 py-5 relative mb-10 flex items-center justify-between gap-3 overflow-hidden rounded-md bg-appjs bg-cover bg-left bg-no-repeat max-md-gutters:flex-wrap'
      >
        <div className='relative grid grid-cols-1 gap-1'>
          <p className='!text-white css-1nv8m9o'>Arex Conf 2024</p>
          <p className='!text-[#CCD3FF] css-v9jhqp'>
            The Arex conference in Asia is back, scheduled for May 22-24 in Shanghai, China!
          </p>
        </div>
      </div>

      <h3
        className='mb-5 flex items-center gap-3 css-419sqh'
        css={css`
          //color: red;
        `}
      >
        <div
          className='flex content-center items-center rounded-md p-2 border border-red-500 bg-white'
          css={css`
            border: 1px solid #d7dbdf;
            height: 38px;
            width: 38px;
          `}
        >
          👋
        </div>
        Welcome to Arex!
      </h3>

      <div className={'gap-[20px] flex w-[100%]'}>
        <Card className={'flex-1'}>
          <div className={'flex justify-between'}>
            <h4>Get set up</h4>
            <p>Step 3 of 3</p>
          </div>

          <div>
            <div className={'p-[16px] flex items-center'}>
              <Icon
                component={Ssf}
                className={'mr-[10px] text-[22px]'}
                style={{ color: token.colorPrimary }}
              />
              <Text className={'text-[#687076] text-[16px]'}>Create a new project</Text>
            </div>

            <div className={'p-[16px] flex items-center'}>
              <Icon
                component={Ssf}
                className={'mr-[10px] text-[22px]'}
                style={{ color: token.colorPrimary }}
              />
              <Text className={'text-[#687076] text-[16px]'}>Create a account</Text>
            </div>

            <div className={'p-[16px] flex items-center bg-[#f1f3f5] rounded justify-between'}>
              <div className={'flex items-center'}>
                <Icon
                  className={'mr-[10px]'}
                  component={IconHollowCircleSvg}
                  style={{ color: token.colorPrimary }}
                />
                <Text className={' text-[16px]'}>Create a new project</Text>
              </div>
              <Button type={'primary'}>
                Get started
                <Icon component={ClarityTagSolid} />
              </Button>
            </div>
          </div>
        </Card>

        <Card className={'flex-1'}>
          <h4>Explore</h4>
          <div>
            <div className='flex content-center items-center rounded-md bg-element p-2'></div>
          </div>
          {[
            {
              description: 'Try out Arex with saas',
              icon: <ShakeOutlined className={'text-[20px]'} />,
              btnMsg: 'Try Arex',
            },
            {
              description: 'Explore APIs and guides with our docs',
              icon: <HighlightOutlined className={'text-[20px]'} />,
              btnMsg: 'Arex Docs',
            },
            {
              description: 'Download our apps',
              icon: <DownloadOutlined className={'text-[20px]'} />,
              btnMsg: 'Tools',
            },
            {
              description: 'Learn about Arex Agent',
              icon: <ToTopOutlined className={'text-[20px]'} />,
              btnMsg: 'Arex',
            },
          ].map(({ description, icon, btnMsg }, index) => (
            <div className={'flex justify-between mb-3'} key={index}>
              {/*<img className={'caret-amber-50'} src={Sssss} alt="" />*/}
              <div className={'flex items-center'}>
                <div className={'flex content-center items-center rounded-md bg-[#f1f3f5] p-2'}>
                  {/*<CloudSyncOutlined className={'text-[20px]'} />*/}
                  {icon}
                </div>
                <span className='css-v9jhqp ml-3'>{description}</span>
              </div>
              <Button href={'https://arextest.com/'} target={'_blank'}>
                {btnMsg}
                <Icon component={ClarityTagSolid} />
              </Button>
            </div>
          ))}
        </Card>
      </div>

      <Alert
        className={'mt-5 mb-5'}
        message='Join us for office hours'
        description={
          <div>
            New to Arex? Having a problem? Get help during our weekly office hours!{' '}
            <a href={'https://arextest.com/'} target={'_blank'} rel='noreferrer'>
              Come here
            </a>
            .
          </div>
        }
        type='info'
        showIcon
      />

      <div className={'mb-10'}>
        <h4 className={'text-2xl'}>Projects</h4>
        <Card>
          <Empty
            image='https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg'
            imageStyle={{ height: 60 }}
            description={<span>Project not created</span>}
          >
            <Button type='primary'>Create Now</Button>
          </Empty>
        </Card>
      </div>

      <List
        className={'bg-white'}
        header={
          <div className={'flex justify-between'}>
            <h4>Projects</h4>
            <Button
              onClick={() => {
                nav('/projects');
              }}
            >
              All Projects
              <ArrowRightOutlined />
            </Button>
          </div>
        }
        // footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          // <List.Item>
          //   <Avatar shape="square" className={'bg-green-600'}>A</Avatar>
          //   <Typography.Text></Typography.Text>{item}
          // </List.Item>
          <List.Item actions={[<MoreOutlined className={'text-[20px] text-[#333]'} />]}>
            <List.Item.Meta
              avatar={
                <Avatar shape='square' className={'bg-green-600'}>
                  A
                </Avatar>
              }
              title={<a href='https://ant.design'>{item}</a>}
              description='demoCompany.arextest.com'
            />
          </List.Item>
        )}
      />

      <div className={'h-20'}></div>
    </div>
  );
};

export default Index;
