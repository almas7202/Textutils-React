// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
// import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#18264c';
      showalert("Dark Mode has been enable", "success");
      document.title = "Textutils-Home Dark Mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enable", "success");
      document.title = "Textutils-Home Light   Mode";
    }

  }
  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutus="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>

            <Route exact path="/">
              <TextFrom showAlert={showalert} heading="Enter Text Too Anaylze Below " mode={mode} />

            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
