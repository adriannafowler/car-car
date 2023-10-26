import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";

import SalespeopleList from "./sales_components/SalespeopleList";
import CustomerList from "./sales_components/CustomerList";
import SalesList from "./sales_components/SalesList";
import SalespersonForm from "./sales_components/SalespersonForm";
import CustomerForm from "./sales_components/CustomerForm";
import SaleForm from "./sales_components/SaleForm";
import SalespersonHistoryList from "./sales_components/SalespersonHistoryList";

import TechnicianList from "./service_components/TechnicianList";
import TechnicianForm from "./service_components/TechnicianForm";
import ServiceAppointments from "./service_components/ServiceAppointments";
import ServiceAppointmentForm from "./service_components/ServiceAppointmentForm";
import ServiceHistory from "./service_components/ServiceHistory";

import ModelList from "./inventory_components/ModelList";
import ModelForm from "./inventory_components/ModelForm";
import ManufacturerList from "./inventory_components/ManufacturerList";
import ManufacturerForm from "./inventory_components/ManufacturerForm";
import AutomobileList from "./inventory_components/AutomobileList";
import AutomobileForm from "./inventory_components/AutomobileForm";

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
          <Route path="technicians">
            <Route index element={<TechnicianList />} />
            <Route path="create" element={<TechnicianForm />} />
          </Route>
          <Route path="models">
            <Route index element={<ModelList />} />
            <Route path="create" element={<ModelForm />} />
          </Route>
          <Route path="manufacturers">
            <Route index element={<ManufacturerList />} />
            <Route path="create" element={<ManufacturerForm />} />
          </Route>
          <Route path="appointments">
            <Route index element={<ServiceAppointments />} />
            <Route path="create" element={<ServiceAppointmentForm />} />
          </Route>
          <Route path="automobiles">
            <Route index element={<AutomobileList />} />
            <Route path="create" element={<AutomobileForm />} />
          </Route>
          <Route path="servicehistory" element={<ServiceHistory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
