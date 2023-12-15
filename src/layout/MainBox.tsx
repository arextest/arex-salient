import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';

const MainBox = () => {
  const r = useRoutes(routes);
  return <div>{r}</div>;
};

export default MainBox;
