import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, deleteStudent, addTeacher, deleteTeacher } from "../../redux/userSlice.js";
import { DeleteOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  // user should login to access dashboard page
  useEffect(() => {
    if (!localStorage.getItem('password')) navigate('/');
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('password');
    navigate('/');
  };

  const dispatch = useDispatch();
  const { students, teachers } = useSelector((state) => state.students);
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherAge, setTeacherAge] = useState("");
  
  const [studentSearch, setStudentSearch] = useState("");
  const [teacherSearch, setTeacherSearch] = useState("");

  const handleAddStudent = () => {
    if (studentName && studentAge) {
      dispatch(addStudent({ id: Date.now(), name: studentName, age: studentAge }));
      setStudentName("");
      setStudentAge("");
    }
  };

  const handleAddTeacher = () => {
    if (teacherName && teacherAge) {
      dispatch(addTeacher({ id: Date.now(), name: teacherName, age: teacherAge }));
      setTeacherName("");
      setTeacherAge("");
    }
  };

  // search filter
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(studentSearch.toLowerCase())
  );

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(teacherSearch.toLowerCase())
  );

  return (
    <div className="p-10">
      <div className="flex p-10 justify-between">
        <h1 className="text-4xl font-bold">CRES</h1>
        <button onClick={handleLogout} className="text-white bg-green-600 px-3">Logout</button>
      </div>
      <h1 className="text-xl my-5">Welcome to <span className="text-green-500 font-semibold">cres,</span></h1>
      <div className="flex gap-10">

        <span>
          {/* student */}
          <h1 className="text-xl font-bold">Students</h1>

          <input
            type="text"
            placeholder="Search Students"
            value={studentSearch}
            onChange={(e) => setStudentSearch(e.target.value)}
            className="border px-4 py-1 mb-4"
          />

          <table className="border border-gray-400">
            <thead>
              <tr className="border border-gray-400">
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Age</th>
                <th className="border border-gray-400 px-4 py-2">Delete</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border border-gray-400">
                  <td className="border border-gray-400 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-400 px-4 py-2">{student.age}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button onClick={() => dispatch(deleteStudent(student.id))} className="text-red-500 px-2 py-1">
                      <DeleteOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <input
            type="text"
            placeholder="Enter Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Age"
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
          />
          <button onClick={handleAddStudent} className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
        </span>

        <span>
          <h1 className="text-xl font-bold">Teachers</h1>

          {/* Search input for teachers */}
          <input type="text"
            placeholder="Search Teachers"
            value={teacherSearch}
            onChange={(e) => setTeacherSearch(e.target.value)}
            className="border px-4 py-1 mb-4"
          />

          <table className="border border-gray-400">
            <thead>
              <tr className="border border-gray-400">
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Age</th>
                <th className="border border-gray-400 px-4 py-2">Delete</th>
              </tr>
            </thead>

            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="border border-gray-400">
                  <td className="border border-gray-400 px-4 py-2">{teacher.name}</td>
                  <td className="border border-gray-400 px-4 py-2">{teacher.age}</td>
                  <td className="border border-gray-400 px-4 py-2">
                    <button onClick={() => dispatch(deleteTeacher(teacher.id))} className="text-red-500 px-2 py-1">
                      <DeleteOutline />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <input
            type="text"
            placeholder="Enter Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Age"
            value={teacherAge}
            onChange={(e) => setTeacherAge(e.target.value)}
          />
          <button onClick={handleAddTeacher} className="bg-green-500 text-white px-4 py-1 rounded">Add</button>
        </span>

      </div>
    </div>
  );
};

export default Dashboard;
