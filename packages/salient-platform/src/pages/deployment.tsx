import {Progress} from "antd";

const Deployment = () => {
  return <div className={'flex items-center justify-center h-[70vh]'}>
    <div className={'w-[800px]'}>
      <h2>部署进度</h2>
      <Progress percent={50} status="active" />
    </div>
  </div>
}

export default Deployment;
