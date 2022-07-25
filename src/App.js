//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
 const [alert, setalert] = useState(null)
 const showalert = (message,type)=>{
   setalert({
     msg: message,
     type: type
   })
   setTimeout(()=>{
     setalert(null);

   },2000);
 }
  const togglemode =()=>{
    if(mode === 'light'){
        setmode('dark')
        document.body.style.backgroundColor = '#5c5c8a'
        showalert("Switched to Dark Mode !","success: ")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Switched to Light Mode !","success: ")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextModifier" mode={mode} AboutUs="AboutTextModifier" toggle={togglemode}/>
    <Alert Alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
         
          <Route exact path="/">
          <Textform showalert={showalert} title="Enter Text For Analysis." mode={mode}/>
          </Route>
    </Switch>
    
    
    {/* <About/>  */}
     </div>
   </Router>
     
    </>
  );
}

export default App;
