import React, { useEffect, useState } from "react";

function AutomobileForm() {
    const [models, setModels] = useState([]);

    const fetchData = async () => {
        const url = "http://localhost:8100/api/models/";
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        setModels(data.models);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        vin: "",
        year: "",
        color: "",
        model_id: "",
        sold: false,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8100/api/automobiles/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
        });

        if (response.ok) {
        setFormData({
            vin: "",
            year: "",
            color: "",
            model_id: "",
        });
        } else {
        console.error("Could not create automobile");
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
            <h1>Add an Automobile</h1>
            <form onSubmit={handleSubmit} id="create-technician-form">
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.vin}
                    placeholder="VIN number"
                    required
                    type="text"
                    name="vin"
                    id="vin"
                    className="form-control"
                />
                <label htmlFor="vin">VIN number</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.year}
                    placeholder="Year"
                    required
                    type="text"
                    name="year"
                    id="year"
                    className="form-control"
                />
                <label htmlFor="year">Year</label>
                </div>
                <div className="form-floating mb-3">
                <input
                    onChange={handleFormInput}
                    value={formData.color}
                    placeholder="Color"
                    required
                    type="text"
                    name="color"
                    id="color"
                    className="form-control"
                />
                <label htmlFor="color">Color</label>
                </div>
                <div className="mb-3">
                <select
                    onChange={handleFormInput}
                    value={formData.model_id}
                    required
                    name="model_id"
                    id="model_id"
                    className="form-control"
                >
                    <option>Choose a model</option>
                    {models.map((model) => {
                    return (
                        <option key={model.id} value={model.id}>
                        {model.manufacturer.name} {model.name}
                        </option>
                    );
                    })}
                </select>
                </div>
                <button className="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
        </div>
    );
}

export default AutomobileForm;
