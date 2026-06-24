//javascript + html = jsx [ x stands for xml]
// XML - user defined tags
// looks like xml that is why jsx


function MyCom13()
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
                <thead />
                <tbody>
                    {/* Do not use curly braces in callback function in jsx for block */}
                    {userData.map((user)=>(
                        <tr>
                            <td>{user.uid}</td>
                            <td>{user.unm}</td>
                            <td>{user.gen}</td>
                        </tr>

                    ))}
                </tbody>
            </thead>
        </table>
   );
}

export default MyCom13;