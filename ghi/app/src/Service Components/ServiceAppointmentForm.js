import React, { useEffect, useState } from "react";

function ServiceAppointmentForm() {
    const [technicians, setTechnicians] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/";
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        setTechnicians(data.technicians);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        customer: "",
        vin: "",
        reason: "",
        technician: "",
        date_time: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/api/appointments/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
        });

        if (response.ok) {
        setFormData({
            customer: "",
            vin: "",
            reason: "",
            technician: "",
            date_time: "",
        });
        } else {
        console.error("Could not create appointment");
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
            <h1>Create Service Appointment</h1>
            <form onSubmit={handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.customer}
                    placeholder="Customer name"
                    required
                    type="text"
                    name="customer"
                    id="customer"
                    className="form-control"
                />
                <label htmlFor="customer">Customer name</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.vin}
                    placeholder="Vin number"
                    required
                    type="text"
                    name="vin"
                    id="vin"
                    className="form-control"
                />
                <label htmlFor="vin">Vin number</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.reason}
                    placeholder="Reason"
                    required
                    type="text"
                    name="reason"
                    id="reason"
                    className="form-control"
                />
                <label htmlFor="reason">Reason</label>
                </div>
                <div className="mb-3">
                <select
                    onChange={handleFormInput}
                    value={formData.technician}
                    required
                    name="technician"
                    id="technician"
                    className="form-control"
                >
                    <option>Choose a technician</option>
                    {technicians.map((technician) => {
                    return (
                        <option key={technician.id} value={technician.id}>
                        {technician.first_name} {technician.last_name}
                        </option>
                    );
                    })}
                </select>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.date_time}
                    placeholder="Date & Time"
                    required
                    type="datetime-local"
                    name="date_time"
                    id="date_time"
                    className="form-control"
                />
                <label htmlFor="date_time">Date & Time</label>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default ServiceAppointmentForm;
