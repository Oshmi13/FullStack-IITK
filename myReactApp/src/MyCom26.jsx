import { use, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyCom26()
{
    const pRef = useRef();
    const formRef = useRef();

    function readContent()
    {
        console.log(pRef.current);
    }
    function formHandler(e)
    {
        e.preventDefault();
        console.log(formRef.current.unm.value , formRef.current.pwd.value);
        //console.log(formRef.current.pwd.value);
    }

        const navigate = useNavigate();

    return(
        <>
        <h3>UseRef</h3>
        <br />

        <p ref={pRef}>Demo Paragraph</p>
        <br />
        <button onClick = {readContent}>Click To Read</button>
        <br />
        <fieldset style={{  padding : "100px"}}>
        <legend style = {{border : "1px solid navy"}}> MyForm</legend>
            <form method = "post" ref = {formRef} onSubmit = {formHandler}>
                <input type="text" name= "unm" placeholder="Enter Name" /> <br />
                <br />
                <input type="password" name= "pwd" placeholder="Enter Name" /> {"  "}
                <br />
                < br />
                <input type="submit" name = "subBtn"  />
            </form>
       </fieldset>
       
       <button className = "btn btn-primary" onClick = {()=> navigate("/contact")}>Move to New Component</button>
        </>

    );

}
export default MyCom26;
// using Ref we are accessing the DOM elemnent