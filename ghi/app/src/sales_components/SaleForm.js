import React, { useState, useEffect } from 'react';

function SaleForm() {
    const [automobiles, setAutomobiles] = useState([])
    const [salespeople, setSalesperson] = useState([])
    const [customers, setCustomer] = useState([])


    const [formData, setFormData] = useState({
        automobile: '',
        salesperson: '',
        customer: '',
        price: '',
    })

    const getAutomobileData = async () => {
        const url = 'http://localhost:8100/api/automobiles/'
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            let filteredData = data.autos.filter(function (el) {
                return el.sold === false
            })
            setAutomobiles(filteredData)
        }
    }

    useEffect(() => {
        getAutomobileData();
    }, [])

    const getSalespersonData = async () => {
        const url = 'http://localhost:8090/api/salespeople/'
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            setSalesperson(data.salespeople)
        }
    }

    useEffect(() => {
        getSalespersonData();
    }, [])

    const getCustomerData = async () => {
        const url = 'http://localhost:8090/api/customers/'
        const response = await fetch(url)

        if (response.ok) {
            const data = await response.json()
            setCustomer(data.customers)
        }
    }

    useEffect(() => {
        getCustomerData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        const saleUrl = 'http://localhost:8090/api/sales/'

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(saleUrl, fetchConfig)

        if (response.ok) {
            const automobileUrl = `http://localhost:8100/api/automobiles/${formData.automobile}/`

            const automobileFetchConfig = {
                method: "PUT",
                body: '{"sold": true}',
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            const automobileResponse = await fetch(automobileUrl, automobileFetchConfig)

            if (automobileResponse.ok) {
                setFormData({
                    automobile: '',
                    salesperson: '',
                    customer: '',
                    price: '',
                })
            }
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
                        <h1>Record a new sale</h1>
                        <form onSubmit={handleSubmit} id="add-sale">
                            <div className="mb-3">
                                <select value={formData.automobile} onChange={handleFormChange} required id="automobile" name="automobile" className="form-select">
                                    <option value="automobile">Choose an automobile VIN</option>
                                    {automobiles.map(auto => {
                                        return (
                                            <option key={auto.id} value={auto.vin}>
                                                {auto.vin}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select value={formData.salesperson} onChange={handleFormChange} required id="salesperson" name="salesperson" className="form-select">
                                    <option value="salesperson">Choose a salesperson</option>
                                    {salespeople.map(salesperson => {
                                        return (
                                            <option key={salesperson.id} value={salesperson.employee_id}>
                                                {salesperson.first_name} {salesperson.last_name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select value={formData.customer} onChange={handleFormChange} required id="customer" name="customer" className="form-select">
                                    <option value="customer">Choose a customer</option>
                                    {customers.map(customer => {
                                        return (
                                            <option key={customer.id} value={customer.id}>
                                                {customer.first_name} {customer.last_name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input value={formData.price} onChange={handleFormChange} placeholder="Price" required type="number" name="price" id="price" className="form-control" />
                                <label htmlFor="price">Price</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleForm
