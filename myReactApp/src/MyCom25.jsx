import { useRef, useState } from "react";

function MyCom25()
{
   let count =  useRef(0);

   function setCount()
   {
    count.current++;
    console.log(count.current)
   }

    return(
        <>
        <button onClick={setCount}> Click Mee!! To Update</button>
        </>
    );

}
export default MyCom25;
//NOTE - Whenever we use useSate, and the whenver the state is changed under component , everytime the component is changed