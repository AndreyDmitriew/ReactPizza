import { QueryClient, QueryClientProvider } from 'react-query';
import PrivateRoutes from '@router/Router';

import './App.scss';

function App() {
  const queryClient = new QueryClient();

  // * Uncomment when logIn logic will exist *;
  // const login: boolean = true;
  return (
    <QueryClientProvider client={queryClient}>
      <section className="wrapper">
        {/* uncomment when logIn logic will exist */}
        {/* {login ? <PrivateRoutes /> : <PublicRoutes />} */}
        <PrivateRoutes />
      </section>
    </QueryClientProvider>
  );
}

export default App;
