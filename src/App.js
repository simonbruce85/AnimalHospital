
import { Route, Routes } from 'react-router-dom';
import Protectedroute from './components/Protectedroute';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthContextProvider } from './components/AuthContext';
import RedirectRoute from './components/RedirectRoute';
import Signup from './components/Signup';
import History from './pages/History';
import Sidebar from './components/Sidebar';
import DogList from './components/DogList';
import RegisterNew from './components/Registration/RegisterNew';
import AddNewVisit from './components/Visit/AddNewVisit';
import DogDetails from './pages/DogDetails';

function App() {
  return (
    <>
    
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<RedirectRoute><Login/></RedirectRoute>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/visit" element={<Protectedroute><DogList/></Protectedroute>}/>
        <Route path="/register" element={<Protectedroute><RegisterNew/></Protectedroute>}/>
        <Route path="/history" element={<Protectedroute><DogDetails/></Protectedroute>}/>
        <Route path="/newVisit" element={<Protectedroute><AddNewVisit/></Protectedroute>}/>
        {/* <Route path="/home" element={<Protectedroute><Home/></Protectedroute>}/> */}
      </Routes>
      </AuthContextProvider></>
   
  );
}

export default App;
