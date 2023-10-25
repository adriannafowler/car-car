function SalespersonForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a Salesperson</h1>
                        <form id="add-salesperson">
                            <div className="form-floating mb-3">
                                <input placeholder="First Name" required type="first_name" name="first_name" id="first_name" className="form-control" />
                                <label htmlFor="first_name">First name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                                <label htmlFor="last_name">Last name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input placeholder="Employee ID" type="text" name="employee_id" id="employee_id" className="form-control" />
                                <label htmlFor="employee_id">Employee ID</label>
                            </div>
                            <div className="mb-3">
                                <select required id="" name="" className="form-select">
                                    <option value="">Choose</option>
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalespersonForm
