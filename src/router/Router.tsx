import { Route, Routes } from 'react-router-dom';

import { main, summary, empty } from './Routes';

// * Uncomment when logIn logic will exist *;
// export const PublicRoutes = () => <Routes></Routes>;
export default function PrivateRoutes() {
  return (
    <Routes>
      <Route key={main.path} path={main.path} element={main.element} />
      <Route key={summary.path} path={summary.path} element={summary.element} />
      <Route key={empty.path} path={empty.path} element={empty.element} />
    </Routes>
  );
}
