import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespeopleList from './SalespeopleList';
import CustomerList from './CustomerList';
import SalesList from './SalesList';
import SalespersonForm from './SalespersonForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople">
            <Route index element={<SalespeopleList />} />
            <Route path="create" element={<SalespersonForm />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesList />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
