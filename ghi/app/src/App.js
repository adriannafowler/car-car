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
import SalespeopleList from './components/SalespeopleList';
import CustomerList from './components/CustomerList';
import SalesList from './components/SalesList';
import SalespersonForm from './components/SalespersonForm';
import CustomerForm from './components/CustomerForm';
import SaleForm from './components/SaleForm';
import TechnicianForm from './Service Components/TechnicianForm';
import TechnicianList from './Service Components/TechnicianList';
import ServiceAppointmentForm from './Service Components/ServiceAppointmentForm';
import ServiceHistory from './Service Components/ServiceHistory';
import ServiceAppointments from './Service Components/ServiceAppointments';
import AutomobileList from './AutomobileList';
import AutomobileForm from './AutomobileForm';
import ManufacturerList from './ManufacturerList';

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
          <Route path="/appointments" element={<ServiceAppointments />} />
          <Route path="/appointments/create" element={<ServiceAppointmentForm />} />
          <Route path="/servicehistory" element={<ServiceHistory />} />
          <Route path="/automobiles" element={<AutomobileList />} />
          <Route path="/automobiles/create" element={<AutomobileForm />} />
          <Route path="/manufacturers" element={<ManufacturerList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
