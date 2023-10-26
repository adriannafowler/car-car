import React, { useState } from 'react';

function ManufacturerForm() {
    const [formData, setFormData] = useState({
        name: '',
    })

    const handleSubmit = async (event) => {
        event.preventDefault()

        const url = 'http://localhost:8100/api/manufacturers/'

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(url, fetchConfig)

        if (response.ok) {
            setFormData({
                name: '',
            })
        }
    }

    const handleFormChange = (event) => {
        const value = event.target.value
        const inputName = event.target.name
        setFormData({
            ...formData,
            [inputName]: value
        })
    }


    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a manufacturer</h1>
                        <form onSubmit={handleSubmit} id="add-manufacturer">
                            <div className="form-floating mb-3">
                                <input value={formData.name} onChange={handleFormChange} placeholder="Manufacturer Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Manufacturer name</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManufacturerForm
