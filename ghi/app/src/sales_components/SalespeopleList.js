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
        <h1 className="p-3">Salespeople</h1>
        <div className="container">
            <div className="row">
            {salespeople?.map((salesperson) => {
                return (
                <div key={salesperson.id} className="col-3">
                    <div className="card mb-5 shadow">
                    <img src={salesperson.picture_url} class="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">
                        {salesperson.first_name} {salesperson.last_name}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                        Employee ID: {salesperson.employee_id}
                        </h6>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </div>
    );
    }

export default SalespeopleList;
