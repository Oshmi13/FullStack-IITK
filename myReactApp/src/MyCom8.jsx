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

function MyCom8()
{
   let isValid = true;
  
   if(isValid)
   {
       return  < ValidMsg />;
   }
   else
   {
     return < InvalidMsg /> ;
   }

}
export default MyCom8;