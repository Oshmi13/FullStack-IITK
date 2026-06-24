
function MyCom6()
{
   let isValid = true;
   let msg = null;
   if(isValid)
   {
         msg = " User is valid....";
   }
   else
   {
        msg = "User is invalid....";
   }

    return(
        // Fragment
        <>
        <hr color='orange' size='10' />
        <h1>My Component 6</h1>
        <hr color='green' size = '10' />
        <br />
        <h3> {msg} </h3>
        
        </>
    );
}
export default MyCom6;