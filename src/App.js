
import { Route, Routes } from 'react-router-dom';
import Protectedroute from './components/Protectedroute';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthContextProvider } from './components/AuthContext';
import RedirectRoute from './components/RedirectRoute';
import Register from './pages/Register';
import Signup from './components/Signup';
import NewVisitPage from './pages/NewVisitPage';
import History from './pages/History';
import AddVisitPage from './pages/AddVisitPage';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<RedirectRoute><Login/></RedirectRoute>}/>
        <Route path="/home" element={<Protectedroute><Home/></Protectedroute>}/>
        <Route path="/visit" element={<Protectedroute><NewVisitPage/></Protectedroute>}/>
        <Route path="/register" element={<Protectedroute><Register/></Protectedroute>}/>
        <Route path="/history" element={<Protectedroute><History/></Protectedroute>}/>
        <Route path="/newVisit" element={<Protectedroute><AddVisitPage/></Protectedroute>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </AuthContextProvider></>
   
  );
}

export default App;
