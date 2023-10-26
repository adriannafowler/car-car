import React, { useState, useEffect } from "react";

function ModelForm() {
    const [manufacturers, setManufacturers] = useState([]);

    const getData = async () => {
        const url = "http://localhost:8100/api/manufacturers/";
        const response = await fetch(url);

        if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        picture_url: "",
        manufacturer_id: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const modelsUrl = "http://localhost:8100/api/models/";

        const fetchConfig = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
        },
        };

        const response = await fetch(modelsUrl, fetchConfig);

        if (response.ok) {
        setFormData({
            name: "",
            picture_url: "",
            manufacturer_id: "",
        });
        }
    };

    const handleFormChange = (event) => {
        const value = event.target.value;
        const inputName = event.target.name;
        setFormData({
        ...formData,
        [inputName]: value,
        });
    };

    return (
        <div className="container">
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a vehicle model</h1>
                <form onSubmit={handleSubmit} id="add-model">
                <div className="form-floating mb-3">
                    <input
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Model Name"
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    />
                    <label htmlFor="name">Model name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                    value={formData.picture_url}
                    onChange={handleFormChange}
                    placeholder="Picture URL"
                    required
                    type="url"
                    name="picture_url"
                    id="picture_url"
                    className="form-control"
                    />
                    <label htmlFor="picture_url">Picture URL</label>
                </div>
                <div className="mb-3">
                    <select
                    value={formData.manufacturer_id}
                    onChange={handleFormChange}
                    required
                    id="manufacturer_id"
                    name="manufacturer_id"
                    className="form-select"
                    >
                    <option value="manufacturer_id">Choose a manufacturer</option>
                    {manufacturers.map((manufacturer) => {
                        return (
                        <option key={manufacturer.id} value={manufacturer.id}>
                            {manufacturer.name}
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
        </div>
    );
}

export default ModelForm;
