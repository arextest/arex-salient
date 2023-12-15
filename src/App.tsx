import { ConfigProvider } from 'antd';
import { Suspense } from 'react';

import MainBox from './layout/MainBox.tsx';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0081f1',
        },
        components: {
          Menu: {
            collapsedWidth: 30,
          },
        },
      }}
    >
      <Suspense fallback={<p>Loading...</p>}>
        <MainBox />
      </Suspense>
    </ConfigProvider>
  );
};

export default App;
