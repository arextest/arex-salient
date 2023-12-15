import { AppstoreOutlined, MailOutlined, ProjectFilled, SettingOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Divider,
  MenuProps,
  Table,
  theme,
  Typography,
} from 'antd';
const dataSource = [
  {
    key: '1',
    name: '192.168.123.1',
    age: 'Running',
    address: '38%(2C)',
    test1: '15%(4G)',
  },
  {
    key: '2',
    name: '192.168.123.1',
    age: 'Running',
    address: '38%(2C)',
    test1: '15%(4G)',
  },
];
const { useToken } = theme;
const { Text } = Typography;
const columns = [
  {
    title: 'IP',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'CPU',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Memory',
    dataIndex: 'test1',
    key: 'test1',
  },
  {
    title: 'Action',
    key: 'operation',
    render: () => (
      <div>
        <a>Metrics</a>
        <Divider type={'vertical'} />
        <a>Log</a>
        <Divider type={'vertical'} />
        <a>Remove</a>
      </div>
    ),
  },
];

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: 'Company',
    children: 'Cloud Database',
  },
  {
    key: '2',
    label: 'Token',
    children: 'Prepaid',
  },
  {
    key: '3',
    label: 'Automatic Renewal',
    children: 'YES',
  },
];

const Index = () => {
  return (
    <div className={'mx-auto grid w-full max-w-[1248px] items-center px-6 pb-2 pt-8'}>
      <div className='flex items-center justify-between gap-3 max-md-gutters:flex-col max-md-gutters:items-start'>
        <div className='grid grid-cols-1 gap-2'>
          <div className='flex items-center gap-3'>
            <ProjectFilled className={'text-3xl'} />
            <h1 className='css-12kl7gt mb-0'>Projects</h1>
          </div>
          <Text type={'secondary'}>View all of the projects associated with your account.</Text>
        </div>
        <div className='justify-self-end'>
          <Button type={'primary'}>Create a Project</Button>
        </div>
      </div>
      <Card className={'mt-6'} bodyStyle={{ padding: 0 }}>
        {/*<Table bordered={false} dataSource={dataSource} columns={columns} />*/}

        <div>
          {/*<p className={"text-xl"}>Basic</p>*/}
          <Descriptions className={'bg-white p-[20px] mb-[20px]'} bordered items={items} />

          {/*<p className={"text-xl"}>lists</p>*/}
          <div className={'grid gap-y-2 grid-cols-1'}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <div className={'bg-white p-[20px]'} key={index}>
                  <div className={'flex justify-between mb-2'}>
                    <div>
                      <Text className={'text-xl mr-5'}>Arex-Ui</Text>
                      <Text type='secondary'>demoCompany.arextest.com</Text>
                    </div>
                    <Button type={'primary'}>Operate</Button>
                  </div>

                  <Table pagination={false} dataSource={dataSource} columns={columns} />
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
