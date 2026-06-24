
import React, { useEffect, useRef,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateEmployee() {

    const [userData, setUserData] = useState({});
    const params = useParams();
    let formRef = useRef();

    const [empData, setEmpData] = useState({
        EmpName: "",
        EmpEmail: "",
        EmpPassword: "",
        EmpDOB: ""
    });

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/admin/edit/${params.id}`)
            .then((res) => {
                // Assuming the data is like { Emp: { ... } }
                setEmpData(res.data.Emp);
            })
            .catch((error) => {
                console.log("Error OCCURRED: " + error);
            });
    }, [params.id]);

    function formHandler(e)
    {
        e.preventDefault();
        setUserData({
            [formRef.current.mailId.name] : formRef.current.mailId.name,
            [formRef.current.pwd.name] : formRef.current.pwd.name,
        });
        axios.put(`http://localhost:8000/api/admin/update/${params.id}`, userData)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log("Error" + error);
        })
    
    }

    return (
        <>
            <h3>Edit Employee Details</h3>
            <form method="post" onSubmit={formHandler} ref = {formRef}>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" value={empData.EmpName || ""} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type="email" value={empData.EmpEmail || ""} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="text" value={empData.EmpPassword || ""} />
                        </td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td>
                            <input type="text" value={new Date(empData.EmpDOB).toDateString()} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan ="2" align="center">
                            <input type = "submit" value = "Update Record" name ="updBtn" className="btn btn-primary" />
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </>
    );
}

export default UpdateEmployee;
