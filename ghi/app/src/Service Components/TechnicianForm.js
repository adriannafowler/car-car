import React, { useState } from "react";

function TechnicianForm() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        employee_id: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/api/technicians/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
        });

        if (response.ok) {
        setFormData({
            first_name: "",
            last_name: "",
            employee_id: "",
        });
        } else {
        console.error("Could not add technician");
        }
    };

    function handleFormInput(e) {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="row">
        <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
            <h1>Add a new technician</h1>
            <form onSubmit={handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.first_name}
                    placeholder="First name"
                    required
                    type="text"
                    name="first_name"
                    id="first_name"
                    className="form-control"
                />
                <label htmlFor="first_name">First name</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.last_name}
                    placeholder="last_name"
                    required
                    type="text"
                    name="last_name"
                    id="last_name"
                    className="form-control"
                />
                <label htmlFor="last_name">Last name</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.employee_id}
                    placeholder="Employee ID"
                    required
                    type="text"
                    name="employee_id"
                    id="employee_id"
                    className="form-control"
                />
                <label htmlFor="employee_id">Employee ID</label>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default TechnicianForm;
