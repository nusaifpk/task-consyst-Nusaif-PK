import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Login/>} />
        <Route path='/dashboard'element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;
