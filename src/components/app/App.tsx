import { QueryClient, QueryClientProvider } from 'react-query';
import { PrivateRoutes, PublicRoutes } from '@router/Router';

import './App.scss';

function App() {
  const queryClient = new QueryClient();
  {
    /* uncomment when logIn logic be exist */
  }
  // const login: boolean = true;
  return (
    <QueryClientProvider client={queryClient}>
      <section className="wrapper">
        {/* uncomment when logIn logic be exist */}
        {/* {login ? <PrivateRoutes /> : <PublicRoutes />} */}

        <PrivateRoutes />
      </section>
    </QueryClientProvider>
  );
}

export default App;
