import {useEffect , useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ViewAllData()
{
    let [userData , setUserData] = useState([]);

    const [loading, setLoading ] = useState(true);
    const navigate = useNavigate();

    function displaydata()
    {
        axios.get("http://localhost:8000/api/admin/viewAllemp",
        {
            headers : { Authorization : `Bearer ${token}`},
        }
        )
        
        .then((res)=> {
            setUserData(res.data.allEmp);
            console.log(res.data.allEmp);
        })
        .catch((error) => {
            console.log("Error Occured : " + error);
        });
    }

    
    useEffect(()=> {
        
    // const token = localStorage.getItem("token");
    // if (!token) {
    //     alert("Access Denied! Please log in. ");
    //     navigate("/login");
    // } else {
    //     setLoading(false);
    // }
    displaydata();

    }, []);
    
    //To avoid flashing of component 
    // if(loading) {
    //         return <>Authenticating...</>; //Show loading until authentication check it is done
    // }

    function deleteEmp(id)
    {
        //console.log(id);
        axios
        .delete(`http://localhost:8000/api/admin/delete/${id}`)
        .then((res)=>{
            console.log(res);
            displaydata();
        })
        .catch((error)=>{
            console.log(error);
        });
    }
    return(
        <>
        <h2> Employee Data </h2>
        < br/>
        <table className = "table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Email</th>
                    <th>Employee Password</th>
                    <th>Date of Birth</th>
                    <th>Employee Rate</th>
                    <th>Employee Status</th>
                    <th>EDIT</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {userData.map((user) => (
                    <tr key={user.id || user.EmpEmail}> {/* Use a unique key if possible */}
                    <td>{user.EmpName}</td>
                    <td>{user.EmpEmail}</td>
                    <td>{user.EmpPassword}</td>
                    {/* <td>{new Date(user.EmpDOB).toDateString()} </td>
                    <td>{new Date(user.EmpDOB).toTimeString()} </td>
                    <td>{new Date(user.EmpDOB).toLocalString()} </td> */}
                   <td>
                     {" "}
                     { new Date(user.EmpDOB).toLocaleString("en-US", {
                        day: "numeric",
                        month : "long",
                        year : "numeric",
                        hour:"2-digit",
                        minute: "2-digit",
                        second:"numeric",
                        hour12: true,
                     })}
                   </td>
                    <td>{user.role}</td>
                    <td>{user.isActive ? 'Active' : 'Inactive'}</td>
                    <td> 
                        {" "}
                        <Link to={`/edit/${user._id}`}> Edit Record  </Link> {" "}
                    </td>
                    <td>
                        <button onClick={()=>deleteEmp(`${user._id}`)} className ="btn btn-link">Delete</button>
                    </td>
            </tr>
            ))}
            </tbody>

        </table>
        </>
       

    );
}
export default ViewAllData;
