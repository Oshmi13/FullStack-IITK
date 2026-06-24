// To treat ValidMsg as component the first letter of function name should be capital
import { useContext } from "react";
import { UserContext } from "./App";

function ValidMsg()
{
    return (
        <>
        <p style = {{color : "green"}}>
            <h1> User is valid </h1>
        </p>
        </>
    )
}
function InvalidMsg()
{
    return (
        <>
        <p style = {{color : "red"}}>
            <h1> User is invalid </h1>
        </p>
        </>
    )
}

function MyCom10()
{
   //STEP 4 - Import the context and consume/use the context
  let isValid = true;
    
  let user =  useContext(UserContext);


   return (
        <>
        
        <hr color='orange' size='10' />
        <h1>My Component 10</h1>
        <h3>{ user.userData.unm } {" "}{ user.userData.age }</h3>
       
       <button onClick = {()=> user.setUserData({ unm : "Khushi"})}> {"  " } Change Value {" "}</button>
       
       
        <hr color='green' size = '10' />
        
        {isValid ? <ValidMsg /> : <InvalidMsg />}


        </>
   );

}
export default MyCom10;