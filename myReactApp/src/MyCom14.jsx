//javascript + html = jsx [ x stands for xml]
// XML - user defined tags
// looks like xml that is why jsx


function MyCom14()
{
    let myCss = {
        color : "navy",
        backgroundColor : "aqua",
        borger : "3px solid red"
    }
    // inline css inside the component
    
    return(
        <>
            <h1 style = {{color : "red", backgroundColor : "yellow"}}>Heading 1</h1>
            <h1 style = { myCss } >Heading 2</h1>
            {/* In react js this is wrong  <p class = "alert alert-info"></p> */}
            <p className = "alert alert-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, beatae dolor id deleniti velit tempora eveniet consequatur amet, explicabo doloribus voluptate ex error nesciunt officiis ea rerum suscipit, quasi maxime!
            </p>
        </>
    )
    
}

export default MyCom14;