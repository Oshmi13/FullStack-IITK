



function MyCom18()
{
    let num = 0;
    function myfun()
    {
        num = num + 1;
        console.log(num);
    }
    return(
        <>
        <h4>Num : {num} </h4>
        <button onClick = {myfun}>Click</button>
        </>
   );
}

export default MyCom18;