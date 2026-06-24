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

function MyCom9()
{
   let fruits = ["Apple", "Mango", "banana"];

   return (
        <>
        
        <hr color='orange' size='10' />
        <h1>My Component 9</h1>
        <hr color='green' size = '10' />
        {fruits.length > 0 &&  (
            <ul>
                <li> {fruits[0]} </li>
                <li> {fruits[1]} </li>
                <li> {fruits[2]} </li>
                
            </ul>
        )}


        </>
   );

}
export default MyCom9;