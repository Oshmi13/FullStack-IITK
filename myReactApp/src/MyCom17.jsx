function DisplayData(props)
{
    return(

        <tr>
            <td>{props.user.uid}</td>
            <td>{props.user.unm}</td>
            <td>{props.user.gen}</td>
        </tr>
    );
}

function MyCom17()
{
    let userData = [
        {uid : 1001,unm : "Oshmi" ,gen : "Female"},
        {uid : 1002,unm : "Oshmi" ,gen : "female"},
        {uid : 1003,unm : "Oshmi" ,gen : "female"},
        {uid : 1004,unm : "Oshmi" ,gen : "female"},
        {uid : 1005,unm : "Oshmi" ,gen : "female"},

    ];
    
    return(
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User Gender</th>
                </tr>
            </thead>
            <tbody>
                {/* The data will ne read and written in user variable
                then this user variable data  will be passed one by one 
                and the data will bw stored in the props */}
                { userData.map((user)=>(

                    //component displayData is called
                    <DisplayData user =  {user} />
                ))}
            </tbody>
        </ table >
    );
    
}

export default MyCom17;