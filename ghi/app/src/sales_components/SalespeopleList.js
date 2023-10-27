import { useEffect, useState } from "react";

function SalespeopleList() {
    const [salespeople, setSalespeople] = useState([]);

    const getData = async () => {
        const response = await fetch("http://localhost:8090/api/salespeople/");

        if (response.ok) {
        const data = await response.json();
        setSalespeople(data.salespeople);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
        <h1>Salespeople</h1>
        <table className="table table-striped">
            <thead>
            <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Profile Picture</th>
            </tr>
            </thead>
            <tbody>
            {salespeople?.map((salesperson) => {
                return (
                <tr key={salesperson.id}>
                    <td>{salesperson.employee_id}</td>
                    <td>{salesperson.first_name}</td>
                    <td>{salesperson.last_name}</td>
                    <td>
                    <img src={salesperson.picture_url} height="150" />
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        </div>
    );
    }

export default SalespeopleList;
