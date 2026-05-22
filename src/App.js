
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes,Navigate } from "react-router-dom";
import Home from"./pages/Home";
import Login from"./pages/Login";
import Signup from"./pages/Signup";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Dashboard from "./components/Dashboard";



function App() {

    const [isLogin ,setIsLogin]=useState(false);
    

  return (
    <div className="min-h-screen bg-white dark:bg-richblack-900 text-black dark:text-white">
     <Navbar className="pb-10"/>
     <div className="page-container">

     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      <Route path="/login" 
      element={!isLogin ? <Login setIsLogin={setIsLogin} /> : <Navigate to="/" />} />

      <Route path="/signup" element={<Signup  setIsLogin={setIsLogin}/>} />
      <Route path="/dashboard" element={<Dashboard />} />

      
     </Routes>
     </div>


    </div>
    )
}

export default App;
