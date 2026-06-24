import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import MyCom1 from './MyCom1'
import MyCom3 from './MyCom3'
import { MyFun1 , MyFun2} from './MyComps'
import MyCom4 from './MyCom4'
import MyCom5 from './MyCom5'
import MyCom6 from './MyCom6'
import MyCom7 from './MyCom7'
import MyCom8 from './MyCom8'
import MyCom9 from './MyCom9'
import MyCom10 from './MyCom10'
import MyCom11 from './MyCom11'
import MyCom12 from './MyCom12'
import MyCom13 from './MyCom13'
import MyCom14 from './MyCom14'
import MyCom15 from './MyCom15'
import MyCom16 from './MyCom16'
import MyCom17 from './MyCom17'
import MyCom18 from './MyCom18'
import NavBar from './MyNav'
import {Route, Routes} from 'react-router-dom';
import MyCom19 from './MyCom19'
import MyCom20 from './MyCom20'
import MyCom24 from './MyCom24'
import MyCom25 from './MyCom25'
import MyCom26 from './MyCom26'
import MyCom27 from './MyCom27'
import DisplayData from './DisplayData'
import AddNewEmployee from './AddEmp'
import UpdateEmployee from './Update'

// STEP 1 - Creating Context
//By creating context we can share more than one value.
const UserContext = createContext();

function App() {
  // Declaration of State
  //const [ count, setCount] = useState(0);
  const [ userData, setUserData] = useState({unm : "oshmi" , age : 45});
  
return (
    <>
    {/* STEP 2 - Providing the context with value
                  wrap all child components and provide context */}
    {/* STEP 3 - Initialize the value which we want to pass to child components */}

    <UserContext.Provider value = { { userData , setUserData} } > 

    <NavBar />

    <Routes>
      <Route path ="/" element={< MyCom1 />} />
        {/* Nested Routes    */}
       <Route path ="/dept" element={< MyCom3 />} >
          <Route path = "engg" element = {< MyCom11 />} />
          <Route path = "mngt" element = {< MyCom13 />} />
        </Route>
      <Route path ="/about/: uid/:unm" element={< MyCom5 />} />
      <Route path ="/contact" element={< MyCom10 />} />
      <Route path ="/comp" element={< MyCom26 />} />
      <Route path ="/comp2" element={< MyCom27 />} />
      <Route path ="/viewAll" element={< DisplayData />} />
      <Route path ="/add" element = {< AddNewEmployee />}/>
      <Route path ="/edit/:id" element = {< UpdateEmployee />}/>
    </Routes>
    </UserContext.Provider>  

{/* STEP 4 - context imported in MyCom10.jsx */}

    <div>

      {/* { < MyCom1 />
      < MyCom3 />
      < MyFun1 />
      < MyFun2 />
      < MyCom4 />
      < MyCom5 />
      < MyCom6 />
      < MyCom7 /> 
      < MyCom8 /> */
      // < MyCom9 />
      // < MyCom10 />
      //< MyCom11 />
      // <MyCom12 />
      // < MyCom13 />
      // <MyCom14 />
      // <MyCom15 />
      // <MyCom16 unm = "oshmi"  age = "45"/>
      // <MyCom17 />
      // <MyCom18 />
      // < MyCom19 />
      //< MyCom20 />
      //<MyCom25/>
      //<MyCom26 />
      
  }

    </div>

    </>
  );
}

export default App;
export { UserContext };

// cd myReactApp
// npm run dev