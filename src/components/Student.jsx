import '../App.css';
// function Student()
// {
//     return(
//         <>
//         <div className='content1'>
//             <div align='center'><h3>Your Grade:  A</h3></div>
//             <div className='cont1'>
//             <p>Subject1: 90</p>
//             <p>Subject2: 89</p>
//             <p>Subject3: 96</p>
//             <p>Subject4: 85</p>
//             <p>Subject5: 93</p>
//             </div>
//         </div>
//         </>
//     )
// }

// export default Student;

// const students=[{name:'john',rollno:32,subject1:90,subject2:85,subject3:79,subject4:87},
//     {name:'arun',rollno:30,subject1:97,subject2:81,subject3:73,subject4:77},
//     {name:'Arul',rollno:21,subject1:80,subject2:75,subject3:69,subject4:67},
//     {name:'kannan',rollno:52,subject1:95,subject2:84,subject3:69,subject4:57},
//     {name:'kumar',rollno:22,subject1:70,subject2:75,subject3:49,subject4:87}]

// import React, { useEffect, useState } from 'react'

// function Student() {
//     const[value,setvalue]=useState('')
//     const handle = (e)=>{setvalue(Number(e.target.value))}
//     const[details,setdetails]=useState(students)
//     function search()
//     {
//         const res=details.filter((a)=>a.rollno===value)
//         setdetails(res)
//     }

//     function Sort()
//     {
//         const so=[...students].sort((a,b)=>a.rollno-b.rollno)
//         setdetails(so)
//     }
//     function del(){
//         console.log(value)
//         delete students[value]
//         setdetails(students)
//     }
    

//    // setdetails(students)
//     // console.log(details)
//   return (
//     <>
//     <div className='ser'>
//         <input type='number' placeholder='Enter the Roll Number' onChange={handle}></input>
//         <button onClick={search}>Search</button>
//         <button onClick={Sort}>Sort</button>
//     </div>
//     <div className='tabl'>
//         {/* {JSON.stringify(details)} */}
//     <table border={0}>
//         <tr>
//             <th>Name</th>
//             <th>Rollno</th>
//             <th>Subject1</th>
//             <th>Subject2</th>
//             <th>Subject3</th>
//             <th>Subject4</th>
//             <th>Actions</th>
//         </tr>
//         {details.map((val, key) => {
//                     return (
//                         <tr key={key}>
//                             <td>{val.name}</td>
//                             <td>{val.rollno}</td>
//                             <td>{val.subject1}</td>
//                             <td>{val.subject2}</td>
//                             <td>{val.subject3}</td>
//                             <td>{val.subject4}</td>
//                             <td><button>Edit</button> 
//                             <button onClick={()=>{setvalue(key),del}}>Delete</button></td>
//                         </tr>
//                     )
//                 })}
//     </table>
//     </div>
//     </>
//   )
// }

// export default Student

// ()=>{delete [...students][key]}

