import { NavLink } from 'react-router-dom';
import SalespeopleList from './SalespeopleList';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="navbar-brand" to="salespeople/" aria-current="page">Salespeople</NavLink>
            <NavLink className="navbar-brand" to="salespeople/create/" aria-current="page">Add a Salesperson</NavLink>
            <NavLink className="navbar-brand" to="customers/" aria-current="page">Customers</NavLink>
            <NavLink className="navbar-brand" to="sales/" aria-current="page">Sales</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
