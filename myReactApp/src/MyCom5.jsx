import {useParams} from 'react-router-dom';

function MyCom5()
{

    let params = useParams();
    // let name = "Dhoni";
    // let age = 45;
    // let hobbies = ["swim", "dance", "sleep"];
    // let userData = {uid: 1001, unm :"virat"};

    return(
        // Fragment
        <>
        <hr color='orange' size='10' />
        <h1>My Component 5</h1>
        <h1>User ID : { params.uid }</h1>
        <h1>User ID : { params.unm }</h1>
        <hr color='green' size = '10' />
        <br />
        {/* <h4>Welcome {name}, Age is {age} </h4>
        <h4>Hobbies : { hobbies [0]} </h4>
        <h4>User Data : { userData.uid } { userData.unm } </h4> */}
        </>
    );
}
export default MyCom5;