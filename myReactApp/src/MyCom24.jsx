import {  useState } from "react";

function MyCom24()
{
    const [count, setCount] =useState(0);

    return(
        <>
       
        <h1>Count : {count} </h1>
        <button onClick = {()=>setCount(count +1)}>Click to update</button>
        </>
    );

}
export default MyCom24;
//NOTE - Whenever we use useSate, and the whenver the state is changed under component , everytime the component is changed