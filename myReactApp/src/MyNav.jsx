import {Link} from "react-router-dom";

function NavBar()

{
    return(
        <>
           {/* <nav>
                <Link to="/">Home</Link>  |
                <Link to="/dept">Department</Link>  |

                    dynamic url
                <Link to="/about">About Us</Link>   |

                <Link to="/contact">Contact Us</Link> |
                <Link to="/dept/engg">Dept engg</Link>  |
                <Link to="/dept/mngt">Dept mgnt </Link>  |
                <Link to="/comp"> New component 1 </Link>  |
                <Link to="/comp2"> New component 2 </Link>  |
                <Link to="/viewAll"> Show Data </Link>  |
                
            </nav> 
         */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class=" navbar" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
         <Link to="/" className="nav-link">Home</Link>  
      </li>
      <li class="nav-item">
        <Link to="/dept" className="nav-link">Department</Link>  
      </li>
      <li class="nav-item">
        <Link to="/about" className="nav-link">About Us</Link>   
      </li>
      <li class="nav-item">
        <Link to="/contact" className="nav-link">Contact Us</Link> 
      </li>
      <li class="nav-item">
        <Link to="/dept/engg" className="nav-link">Dept engg</Link>  
      </li>
      <li class="nav-item">
       <Link to="/dept/mngt" className="nav-link">Dept mgnt </Link>  
      </li>
      <li class="nav-item">
         <Link to="/comp" className="nav-link"> New component 1 </Link>  
      </li>
      <li class="nav-item">
         <Link to="/comp2" className="nav-link"> New component 2 </Link>  
      </li>
      <li class="nav-item">
         <Link to="/viewAll" className="nav-link"> Show Data </Link>  
      </li>
       <li class="nav-item">
         <Link to="/add" className="nav-link"> Add Employee </Link>  
      </li>
    </ul>
  </div>
</nav>
        </>
    );
}

export default NavBar;