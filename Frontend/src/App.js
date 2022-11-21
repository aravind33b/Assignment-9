import React from "react";
import {
  //BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import AboutUs from "./components/Pages/About-Us";
import Contact from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import Jobs from "./components/Pages/Jobs";
import Login from "./components/Login/Login";
import useLogin from "./useLogin";


const loginString = localStorage.getItem('loggedInStatus');
const userLoggedIn = JSON.parse(loginString);

function setLoggedIn(userStatus) {
  sessionStorage.setItem('loggedInStatus', JSON.stringify(userStatus));
}

function getLoggedIn() {
  return userLoggedIn?.loggedIn
}

function App() {
  let navigate = useNavigate();
  let url = window.location.pathname;
  const {loggedIn, setLoggedIn} = useLogin();
  if(loggedIn!== undefined && !loggedIn) {
    console.log(loggedIn)
    navigate("/");
  }
  
  if(url === '/' && (userLoggedIn == undefined || !userLoggedIn.data.isUserLoggedIn))
      {
        return(
          <div className="wrapper">
            <Routes>
              <Route exact path='/' element={<Login setLoggedIn={setLoggedIn}/>} />
              <Route exact path='/Home' element={<Login setLoggedIn={setLoggedIn}/>} />
              <Route exact path="/AboutUs" element={<Login setLoggedIn={setLoggedIn}/>} />
              <Route exact path="/Contact" element={<Login setLoggedIn={setLoggedIn}/>} />
              <Route exact path="/Jobs" element={<Login setLoggedIn={setLoggedIn}/>} />
            </Routes>
        </div>
        );
      }
    else if(url === '/' && userLoggedIn.data.isUserLoggedIn){
      return(
        <div className="wrapper">
          <Routes>
            <Route exact path='/' element={<Login setLoggedIn={setLoggedIn}/>} />
            <Route exact path='/Home' element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Jobs" element={<Jobs />} />
          </Routes>
      </div>
      );
    }
      else{
  return (
    <div className="wrapper">
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route exact path='/Home' element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Jobs" element={<Jobs />} />
        </Routes>
    </div>
  );
      }
};

export default App;
