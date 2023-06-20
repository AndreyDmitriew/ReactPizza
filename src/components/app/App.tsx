import { QueryClient, QueryClientProvider } from 'react-query';
import PrivateRoutes from '@router/Router';

import './App.scss';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <section className="wrapper">
        <PrivateRoutes />
      </section>
    </QueryClientProvider>
  );
}

export default App;
