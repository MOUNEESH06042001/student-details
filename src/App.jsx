import Staff from "./components/Staff";
// import Student from "./components/Student";
import './App.css';
import { useState } from "react";
import StudentTable from "./components/StudentTable";
function App(){
  const [state,setstate]=useState('Student');
  function handle(){
    setstate(state==='Student'?'Staff':'Student')
  }
  return(
    <>
    <div className="header"><h1>KEC</h1>
    <div className="head">
    <div>Student</div>
    <div><button onClick={handle}>Change</button></div>
    <div>Staff</div>
    </div>
    </div>
     <div>
      {state=='Staff'?<StudentTable/>:<Staff/>}
     </div>
    </>
  )
}

export default App;