import React, { useEffect, useState } from "react";

function TechnicianList() {
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

    return (
        <>
        <h1>Technicians</h1>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Employee ID</th>
            </tr>
            </thead>
            <tbody>
            {technicians.map((technician) => {
                return (
                <tr key={technician.id}>
                    <td>
                    {technician.first_name} {technician.last_name}
                    </td>
                    <td>{technician.employee_id}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </>
    );
}

export default TechnicianList;
