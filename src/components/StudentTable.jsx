import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortByName, sortByRollNo, sortByMarks, searchByRollNo, resetFilters, deleteStudent } from '../studentSlice';
import '../App.css';

const StudentTable = () => {
  const [searchRollNo, setSearchRollNo] = useState('');
  const students = useSelector((state) => state.students.filteredRecords.length ? state.students.filteredRecords : state.students.records);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchRollNo) {
      dispatch(searchByRollNo(Number(searchRollNo)));
    } else {
      dispatch(resetFilters());
    }
  };

  const handleDelete = (rollno) => {
    dispatch(deleteStudent(rollno));
  };

  return (
    <div className='tabl'>
      <div className='sort'>
        {/* <button onClick={() => dispatch(sortByName())}>Sort by Name</button> */}
        {/* <button onClick={() => dispatch(sortByRollNo())}>Sort</button> */}
        </div>
        {/* <button onClick={() => dispatch(sortByMarks())}>Sort by Marks</button> */}
        <div className='btn'>
          <input type='number' value={searchRollNo} onChange={(e) => setSearchRollNo(e.target.value)} />
          <button onClick={handleSearch}>Search by Roll No</button>
          <button onClick={() => dispatch(sortByRollNo())}>Sort</button>
        </div>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>ROLL NO</th>
            <th>MARK</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {students.map((row) => (
            <tr key={row.rollno}>
              <td>{row.name}</td>
              <td>{row.rollno}</td>
              <td>{row.mark}</td>
              <td className='cent'>
                <button onClick={() => console.log('Edit')}>Edit</button>
                <button onClick={() => handleDelete(row.rollno)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;