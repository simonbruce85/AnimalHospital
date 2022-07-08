
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
    <Sidebar />
      <Routes>
        <Route path="/" element={<RedirectRoute><Login/></RedirectRoute>}/>
        {/* <Route path="/home" element={<Protectedroute><Home/></Protectedroute>}/> */}
        <Route path="/visit" element={<Protectedroute><DogList/></Protectedroute>}/>
        <Route path="/register" element={<Protectedroute><RegisterNew/></Protectedroute>}/>
        <Route path="/history" element={<Protectedroute><History/></Protectedroute>}/>
        <Route path="/newVisit" element={<Protectedroute><AddNewVisit/></Protectedroute>}/>
        <Route path="/temporary" element={<Protectedroute><DogDetails/></Protectedroute>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </AuthContextProvider></>
   
  );
}

export default App;
