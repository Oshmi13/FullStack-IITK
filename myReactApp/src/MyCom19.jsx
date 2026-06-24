
//hooks
import { use, useState } from "react";
function MyCom19()
{
   const [ userData, setUserData] = useState({uid:0,unm:null});
   console.log(userData);
   


    // function myfun()
    // {
    //     num = num + 1;
    //     console.log(num);
    // }

    return(
        <>
        <h4>User Name : {userData.unm} </h4>
             {/* parametarized func is called using anonymous func */}
            {/* the value passed in the mufun is passed to arr */}
        <button onClick = { ()=>setUserData({uid : 1001, unm : "Oshmi"})}>Click</button>
        </>
   );
}

export default MyCom19;