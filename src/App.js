
import { Route, Routes } from 'react-router-dom';
import './App.css';
import History from './components/History';
import Protectedroute from './components/Protectedroute';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthContextProvider } from './components/AuthContext';
import RedirectRoute from './components/RedirectRoute';
import Register from './pages/Register';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<RedirectRoute><Login/></RedirectRoute>}/>
        <Route path="/home" element={<Protectedroute><Home/></Protectedroute>}/>
        <Route path="/register" element={<Protectedroute><Register/></Protectedroute>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </AuthContextProvider></>
   
  );
}

export default App;
