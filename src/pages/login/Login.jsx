import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name === "admin" && password === "admin") {
      navigate("/dashboard"); 
      localStorage.setItem('password',password)
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className='text-4xl font-bold'>CRES!</h1>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded mb-2"
      />
      <button onClick={handleLogin} className="bg-green-500 w-48 text-white p-2 rounded">
        Login
      </button>
    </div>
  );
}

export default Login