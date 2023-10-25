import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespeopleList from './components/SalespeopleList';
import CustomerList from './components/CustomerList';
import SalesList from './components/SalesList';
import SalespersonForm from './components/SalespersonForm';
import CustomerForm from './components/CustomerForm';
import SaleForm from './components/SaleForm';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';

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
            <Route path="create" element={<CustomerForm />} />
          </Route>
          <Route path="sales">
            <Route index element={<SalesList />} />
            <Route path="create" element={<SaleForm />} />
          </Route>
          <Route path="/technicians" element={<TechnicianList />} />
          <Route path="/technicians/create" element={<TechnicianForm />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
