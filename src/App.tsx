import { BrowserRouter } from 'react-router-dom';
import Dashboard from '@/components/common/layout/DashBoard';
import Router from '@/router';

const App = () => {
  return (
    <BrowserRouter>
      <Dashboard>
        <Router />
      </Dashboard>
    </BrowserRouter>
  );
};

export default App;
