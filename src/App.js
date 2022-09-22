// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
  }
  const toggled = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("you enable darkmode", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("you enable lightmode", "success")
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggled={toggled} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <Textform heading="Enter the Text to Analize" mode={mode} />
      </div>
    </>
  );
}
export default App;