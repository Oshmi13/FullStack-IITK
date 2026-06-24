import { use, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyCom27()
{
    const [count, setCount ] = useState(0);

    useEffect(()=>{
        console.log("Component Mounted...");
    }, {});

    useEffect(()=>{
        console.log("Component Updated...");
    }, [count]);

    useEffect(()=>{
        return(()=>{
            console.log("Component Unmounted...");
        })
    }, []);

    return(
        <>
            <h3>Component LifeCycle Demo</h3>
            <h5>Count : {count}</h5>
            <button onClick={()=> setCount(count + 1)}>click</button>
        
        </>

    );

}
export default MyCom27;
// using Ref we are accessing the DOM elemnent