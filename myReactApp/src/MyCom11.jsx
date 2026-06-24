//javascript + html = jsx [ x stands for xml]
// XML - user defined tags
// looks like xml that is why jsx


function MyCom11()
{

    let fruits = ["grapes", "mango", "melon"];
    let listEle = [];

    for(let ele of fruits)
    {
        listEle.push(<li> { ele } </li>);
    }


    return(<ul>{ listEle}</ul> );
}

export default MyCom11;