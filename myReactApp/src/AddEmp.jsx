import { useRef, useState } from 'react';
import axios from 'axios'; // Make sure axios is imported

function AddNewEmployee() {
    const [userData, setUserData] = useState({});
    const [msg, setMsg] = useState(""); // Changed from {} to ""
    const formRef = useRef();

    function formHandler(e) {
        e.preventDefault();

        const form = formRef.current;

        const data = {
            [form.enm.name]: form.enm.value,
            [form.mailId.name]: form.mailId.value,
            [form.pwd.name]: form.pwd.value,
            [form.dob.name]: form.dob.value
        };

        setUserData(data);
        console.log("Sending user data:", data);

        axios.post("http://localhost:8000/api/admin/register", data)
            .then((res) => {
                console.log(res);
                setMsg(res.data.message || "Employee added successfully!");

                // Clear input fields
                form.enm.value = "";
                form.mailId.value = "";
                form.pwd.value = "";
                form.dob.value = "";
            })
            .catch((error) => {
                console.error("Error occurred:", error);
                setMsg("An error occurred while adding employee.");
            });
    }

    return (
        <div className="container">
            <h3>Add New Employee</h3>
            <form method="post" ref={formRef} onSubmit={formHandler}>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Employee Name</td>
                            <td><input type="text" name="enm" required /></td>
                        </tr>
                        <tr>
                            <td>Employee Password</td>
                            <td><input type="password" name="pwd" required /></td>
                        </tr>
                        <tr>
                            <td>Employee Email</td>
                            <td><input type="email" name="mailId" required /></td>
                        </tr>
                        <tr>
                            <td>Employee DOB</td>
                            <td><input type="date" name="dob" required /></td>
                        </tr>
                        <tr>
                            <td colSpan="2" align="center">
                                <input type="submit" name="addBtn" value="Add Employee" className="btn btn-info" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {msg && (
                    <p className="alert alert-success">
                        {msg}
                    </p>
                )}
            </form>
        </div>
    );
}

export default AddNewEmployee;
