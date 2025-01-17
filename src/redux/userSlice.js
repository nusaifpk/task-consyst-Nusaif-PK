import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, name: "Nusaif P K", age: 22 },
    { id: 2, name: "Minhaj", age: 25 },
  ],
  teachers: [
    { id: 1, name: "Rahul", age: 40 },
    { id: 2, name: "Gayathri", age: 35 },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
    deleteTeacher: (state, action) => {
      state.teachers = state.teachers.filter(
        (teacher) => teacher.id !== action.payload
      );
    },
  },
});

export const { addStudent, deleteStudent, addTeacher, deleteTeacher } = userSlice.actions;
export default userSlice.reducer;
