// // import logo from './logo.svg';
import './Appa.css';

import React, { useState } from 'react'
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';


// import React from "react";

// import { Routes ,Route } from 'react-router-dom';
function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode has been enabled", "sucess")
      document.title = 'TextUtiles- Dark mode'

      //  Agar title ku change karna chare 

      // setInterval(() => {
      //   document.title='TextUtiles-is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title='TextUtiles-Install now'
      // }, 10000);

    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "sucess")
      document.title = 'TextUtiles- Light mode'
    }
  }


  // Me harris bhai exercise 2 home work
  const [memod, setmemod] = useState('light')
  const todo = () => {
    if (memod === 'light') {
      setmemod('dark')
      document.body.style.backgroundColor = "red";
      showAlert("red", "sucess")
      document.body.style.color = "white"


    } else {
      setmemod('light')
      document.body.style.backgroundColor = "white";
      showAlert("green", "sucess")
      document.body.style.color = "black"

    }
  }

  return (
    <>
      {/* <Navbar title=" teratitle"  / > */}
      {/* <About/> */}
      {/* <Navbar title="Meratitle" about="About Us" mode={mode} togglemode={togglemode}/ > */}

    <Navbar mode={mode} togglemode={togglemode} memod={memod} todo={todo} />
    <Alert alert={alert} />
     
      {/* <Routes> */}
  
    <div className="container">
    {/* <Route exact path='/about' element={<About/>} /> */}
        {/* <Route exact path='/home' element={ */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyse" />
        {/* // }  */}
      
    </div>
  
{/* </Routes> */}
          

    </>
  );
}

export default App;


















