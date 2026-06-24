import { use, useState } from "react";

function MyCom20()
{
    const [formData , setformData ] = useState({});

    function userData(e)
    {
       let key = e.target.name; //key
       let value = e.target.value; //value
        // ...formData  spread operator to store previous data
       setformData({...formData , [key] : value });

       console.log(formData);
    }
    function formHandler(e)
    {
        e.preventDefault();
        console.log(formData);
    }

    return(
        <>
        <form method="post" onSubmit = { formHandler }>
        <table className = "table table-bordened">
            <tbody>
                <tr>
                    <td> User Name </td>
                    <td><input type="text" name="unm" onInput={ (e) => {userData(e)}}></input></td>
                </tr>
                <tr>
                    <td> Password </td>
                    <td><input type="password" name="pwd"  onInput={ (e) => {userData(e)}}></input></td>
                </tr>
                <tr>
                    
                    <td colSpan = {2}><input type="submit" name="subBtn"></input></td>
                </tr>
            </tbody>
        </table>
        </form>
        </>
   );
}

export default MyCom20;