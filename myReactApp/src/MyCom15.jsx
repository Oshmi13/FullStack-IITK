//javascript + html = jsx [ x stands for xml]
// XML - user defined tags
// looks like xml that is why jsx
function myfun(nm)
{
    alert("Welcome" + nm);
}

function MyCom15()
{
    
    
    return(
        <>
           <button onClick = {()=>myfun("Oshmi")} className = " btn btn-outline-primary" >Click</button>
        </>
    )
    
}

export default MyCom15;