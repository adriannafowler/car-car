import { useEffect, useState } from 'react'

function SalespersonHistoryList() {
    const [sales, setSales] = useState([])
    const [salespeople, setSalesperson] = useState([])

    const [selectedSalesperson, setSelectedSalesperson] = useState([])


    const getData = async () => {
        const response = await fetch('http://localhost:8090/api/sales/')

        if (response.ok) {
            const data = await response.json()
            let filteredData = data.sales.filter(function (el) {
                return el.salesperson.employee_id === selectedSalesperson
            })
            setSales(filteredData)
        }
    }

    useEffect(() => {
        getData()
    }, [selectedSalesperson])

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

    const handleFormChange = (event) => {
        setSelectedSalesperson(event.target.value)
        }

    return (
        <div className="container">
            <h1>Salesperson History</h1>
            <div className="mb-3">
                <select value={selectedSalesperson.salesperson} onChange={handleFormChange} required id="salesperson" name="salesperson" className="form-select">
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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Salesperson Name</th>
                        <th>Customer</th>
                        <th>VIN</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sales?.map(sale => {
                        return (
                            <tr key={sale.id}>
                                <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                                <td>{sale.customer.first_name} {sale.customer.last_name}</td>
                                <td>{sale.automobile.vin}</td>
                                <td>{sale.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default SalespersonHistoryList
