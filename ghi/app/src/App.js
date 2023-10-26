import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespeopleList from './sales_components/SalespeopleList';
import CustomerList from './sales_components/CustomerList';
import SalesList from './sales_components/SalesList';
import SalespersonForm from './sales_components/SalespersonForm';
import CustomerForm from './sales_components/CustomerForm';
import SaleForm from './sales_components/SaleForm';
import TechnicianForm from './TechnicianForm';
import TechnicianList from './TechnicianList';
import SalespersonHistoryList from './sales_components/SalespersonHistoryList';
import ModelList from './inventory_components/ModelList';
import ModelForm from './inventory_components/ModelForm';
import ManufacturerForm from './inventory_components/ManufacturerForm';

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
            <Route path="history" element={<SalespersonHistoryList />} />
          </Route>
          <Route path="/technicians" element={<TechnicianList />} />
          <Route path="/technicians/create" element={<TechnicianForm />} />
          <Route path="models">
            <Route index element={<ModelList />} />
            <Route path="create" element={<ModelForm />} />
          </Route>
          <Route path="manufacturers">
            <Route path="create" element={<ManufacturerForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
