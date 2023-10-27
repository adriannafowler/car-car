import React, { useEffect, useState } from "react";
import moment from "moment";

function ServiceHistory() {
    const [autos, setAutos] = useState([]);
    const [vipVins, setVipVins] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [q, setQ] = useState("");

    const fetchAutoData = async () => {
        const url = "http://localhost:8100/api/automobiles/";
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        setAutos(data.autos);
        }
    };
    useEffect(() => {
        fetchAutoData();
    }, []);

    useEffect(() => {
        let vins = [];
        autos.forEach((auto) => {
        if (auto.sold === true) {
            vins.push(auto.vin);
        }
        });
        setVipVins(vins);
    }, [autos]);

    const fetchData = async () => {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        setAppointments(data.appointments);
        }
    };
    useEffect(() => {
        fetchData();
    }, [vipVins]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (q !== "") {
        setAppointments(
            appointments.filter((appointment) => appointment.vin === q)
        );
        }
    };

    appointments.sort(function (a, b) {
        return new Date(a.date_time) - new Date(b.date_time);
    });

    return (
        <>
        <h1>Service History</h1>
        <div className="search-wrapper">
            <form onSubmit={handleSearch}>
            <input
                onChange={(e) => setQ(e.target.value)}
                value={q}
                type="search"
                name="search-form"
                id="search-form"
                className="search-input"
                placeholder="Search by VIN"
            />
            <button type="submit">Search</button>
            </form>
        </div>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Customer</th>
                <th>Is VIP?</th>
                <th>VIN</th>
                <th>Date</th>
                <th>Time</th>
                <th>Technician</th>
                <th>Reason</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {appointments.map((appointment) => {
                const date = moment(appointment.date_time).format("MM/DD/YYYY");
                const time = moment(appointment.date_time).format("HH:mm");
                let vip = "No";
                if (vipVins.includes(appointment.vin)) {
                vip = "Yes";
                }
                return (
                <tr key={appointment.id}>
                    <td>{appointment.customer}</td>
                    <td>{vip}</td>
                    <td>{appointment.vin}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{appointment.technician}</td>
                    <td>{appointment.reason}</td>
                    <td>{appointment.status}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </>
    );
}

export default ServiceHistory;
