import React, {useEffect, useState} from 'react'


function ServiceHistory() {
    const [appointments, setAppointments] = useState([])

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/"
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            setAppointments(data.appointments)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <h1>Service History</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Customer</th>
                        {/* <th>Is VIP?</th> */}
                        <th>VIN</th>
                        <th>Date</th>
                        {/* <th>Time</th> */}
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id}>
                                <td>{appointment.customer}</td>
                                {/* <td>{}</td> */}
                                <td>{appointment.vin}</td>
                                <td>{appointment.date_time}</td>
                                {/* <td>{appointment.}</td> */}
                                <td>{appointment.technician}</td>
                                <td>{appointment.reason}</td>
                                <td>{appointment.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ServiceHistory
