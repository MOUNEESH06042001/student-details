import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  records: [
    { name: "john", rollno: 31, mark: 89 },
    { name: "arun", rollno: 32, mark: 98 },
    { name: "kumar", rollno: 33, mark: 78 },
    { name: "arul", rollno: 34, mark: 99 },
    { name: "kannan", rollno: 35, mark: 59 },
    { name: "kamalan", rollno: 41, mark: 60 },
    { name: "mahi", rollno: 36, mark: 30 },
    { name: "darun", rollno: 37, mark: 80 },
    { name: "mani", rollno: 38, mark: 90 },
    { name: "mouli", rollno: 39, mark: 100 },
    { name: "ram", rollno: 50, mark: 70 }
  ],
  filteredRecords: []
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    sortByName: (state) => {
      state.filteredRecords = [...state.records].sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByRollNo: (state) => {
      state.filteredRecords = [...state.records].sort((a, b) => a.rollno - b.rollno);
    },
    sortByMarks: (state) => {
      state.filteredRecords = [...state.records].sort((a, b) => b.mark - a.mark);
    },
    searchByRollNo: (state, action) => {
      state.filteredRecords = state.records.filter((student) => student.rollno === action.payload);
    },
    resetFilters: (state) => {
      state.filteredRecords = state.records;
    },
    deleteStudent: (state, action) => {
      state.records = state.records.filter(student => student.rollno !== action.payload);
      state.filteredRecords = state.filteredRecords.filter(student => student.rollno !== action.payload);
    }
  }
});

export const { sortByName, sortByRollNo, sortByMarks, searchByRollNo, resetFilters, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;