import React, {useEffect, useState} from 'react'


function AutomobileList() {
    const [autos, setAutomobiles] = useState([])

    const fetchData = async () => {
        const url = "http://localhost:8100/api/automobiles/"
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setAutomobiles(data.autos)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <h1>Automobiles</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Year</th>
                        <th>Manufacturer</th>
                        <th>Model</th>
                        <th>Color</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {autos.map(auto => {
                        let sold = "No"
                        if (auto.sold !== false) {
                            sold = "Yes"
                        }
                        return (
                            <tr key={auto.id}>
                                <td>{auto.vin}</td>
                                <td>{auto.year}</td>
                                <td>{auto.model.manufacturer.name}</td>
                                <td>{auto.model.name}</td>
                                <td>{auto.color}</td>
                                <td>{sold}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default AutomobileList
