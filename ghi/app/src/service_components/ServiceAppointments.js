import React, { useEffect, useState } from "react";
import moment from "moment";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    } from "mdb-react-ui-kit";

    function ServiceAppointments() {
    const [autos, setAutos] = useState([]);
    const [vipVins, setVipVins] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const [show, setShow] = useState(false);
    const [appointmentId, setAppointmentId] = useState("");
    const [formData, setFormData] = useState({
        status: "",
    });

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
    }, [vipVins, formData]);

    const fetchStatusData = async () => {
        const statusUrl = "http://localhost:8080/api/statuses/";
        const statusResponse = await fetch(statusUrl);
        if (statusResponse.ok) {
        const statusData = await statusResponse.json();
        setStatuses(statusData.statuses);
        }
    };

    useEffect(() => {
        fetchStatusData();
    }, []);

    function handleFormInput(e) {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const statusUpdateResponse = await fetch(
        `http://localhost:8080/api/appointments/${appointmentId}/`,
        {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
            "Content-Type": "application/json",
            },
        }
        );
        if (statusUpdateResponse.ok) {
        setFormData({ status: "" });
        }
        toggleShow();
    };

    function toggleShow() {
        setShow(!show);
    }

    function specialClick(props) {
        toggleShow();
        setAppointmentId(props);
    }

    appointments.sort(function (a, b) {
        return new Date(a.date_time) - new Date(b.date_time);
    });

    return (
        <>
        <h1>Service Appointments</h1>
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
                <tr key={appointment.id} id={appointment.status}>
                    <td>{appointment.customer}</td>
                    <td>{vip}</td>
                    <td>{appointment.vin}</td>
                    <td>{date}</td>
                    <td>{time}</td>
                    <td>{appointment.technician}</td>
                    <td>{appointment.reason}</td>
                    <td>
                    <button
                        className="btn btn-outline-success"
                        onClick={() => specialClick(appointment.id)}
                    >
                        {appointment.status}
                    </button>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
        <MDBModal show={show} setShow={setShow} tabIndex="-1">
            <MDBModalDialog>
            <MDBModalContent>
                <MDBModalHeader>
                <MDBModalTitle>Choose a new status</MDBModalTitle>
                <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={toggleShow}
                ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                <form id="update-status">
                    <select
                    onChange={handleFormInput}
                    value={formData.status}
                    name="status"
                    id="status"
                    className="form-control"
                    >
                    <option key="default">Choose a new status</option>
                    {statuses.map((status) => {
                        return (
                        <option key={status.status} value={status.id}>
                            {status.status}
                        </option>
                        );
                    })}
                    </select>
                </form>
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggleShow}>
                    Close
                </MDBBtn>
                <MDBBtn onClick={handleSubmit}>Update</MDBBtn>
                </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        </>
    );
}

export default ServiceAppointments;
