import { NavLink } from "react-router-dom";
import carCar from "./carCar.png";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            src={carCar}
            alt={"CarCar"}
            width="75"
            className="d-inline-block align-text-top"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown" data-bs-theme="dark">
              <button
                className="btn btn-outline-light btn-lg dropdown-toggle bg-success m-1"
                type="button"
                id="inventoryDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </button>
              <ul
                className="dropdown-menu bg-success"
                aria-labelledby="dropdownMenuButtonDark"
              >
                <li>
                  <NavLink className="nav-link bg-success" to="models/">
                    Models
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link bg-success" to="models/create/">
                    Create a Model
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link bg-success" to="/manufacturers/">
                    Manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link bg-success"
                    to="manufacturers/create/"
                  >
                    Create a Manufacturer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link bg-success" to="/automobiles/">
                    Automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link bg-success"
                    to="/automobiles/create/"
                  >
                    Add an automobile
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown" data-bs-theme="dark">
              <button
                className="btn btn-outline-light btn-lg dropdown-toggle bg-success m-1"
                type="button"
                id="inventoryDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service
              </button>
              <ul
                className="dropdown-menu bg-success"
                aria-labelledby="dropdownMenuButtonDark"
              >
                <li>
                  <NavLink className="nav-link bg-success" to="/technicians/">
                    Technicians
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link bg-success"
                    to="/technicians/create/"
                  >
                    Add a technician
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link bg-success" to="/appointments/">
                    Service Appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link bg-success"
                    to="/appointments/create/"
                  >
                    Create a Service Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link bg-success"
                    to="/servicehistory/"
                  >
                    Service History
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown" data-bs-theme="dark">
              <button
                className="btn btn-outline-light btn-lg dropdown-toggle bg-success m-1"
                type="button"
                id="inventoryDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </button>
              <ul
                className="dropdown-menu bg-success"
                aria-labelledby="dropdownMenuButtonDark"
              >
                <li>
                  <NavLink className="nav-link bg-success" to="salespeople/">
                    Salespeople
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link bg-success"
                    to="salespeople/create/"
                  >
                    Add a Salesperson
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link bg-success" to="customers/">
                    Customers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link bg-success"
                    to="customers/create/"
                  >
                    Add a Customer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link bg-success" to="sales/">
                    Sales
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link bg-success" to="sales/create/">
                    Add a Sale
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link bg-success" to="sales/history/">
                    Salesperson History
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
