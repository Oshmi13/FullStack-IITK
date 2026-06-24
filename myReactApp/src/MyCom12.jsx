//javascript + html = jsx [ x stands for xml]
// XML - user defined tags
// looks like xml that is why jsx


function MyCom12()
{

    let fruits = ["grapes", "mango", "melon"];
    


   return(
    <ul>
          {/* map func reads all the the element one by
        one from the array and then pass it on to the map to manipulate.  */}
        
        {fruits.map((fruit)=>(
            <li>{ fruit }</li>
        ))}
    </ul>
   );
}

export default MyCom12;