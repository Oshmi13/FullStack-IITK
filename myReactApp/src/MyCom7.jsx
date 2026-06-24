// To treat ValidMsg as component the first letter of function name should be capital
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

function MyCom7()
{
   let isValid = false;
   let msg = null;
   if(isValid)
   {
         msg = < ValidMsg />;
   }
   else
   {
      msg = < InvalidMsg /> ;
   }

   return(
    // Fragment
    <>
    <hr color='orange' size='10' />
    <h1>My Component 7</h1>
    <hr color='green' size = '10' />
    <br />
    <h3> {msg} </h3>
    
    </>
);

    
}
export default MyCom7;