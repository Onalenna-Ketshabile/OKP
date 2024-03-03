import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pingme from "./components/Pingme";
import EmailFeedback from "./components/EmailFeedback";

function App() {
  const [load, upadateLoad] = useState(true);

  const [isPingOpen, setIsPingOpen] = useState(false);
  const [isSuccess, setIsSuccessful] = useState();
  const [isSendButtonClicked, setIsSendButtonClicked] = useState(false);


  const handlePingOpen= () => {
    setIsPingOpen(true);
    document.body.classList.add('body-scroll-lock');
  };
  const handlePingClose = () => {
    setIsPingOpen(false);
    console.log("Is Successfully? -> ", isSuccess);
    document.body.classList.remove('body-scroll-lock');
  };

  const handleFeedbackClose = () => { 
    setIsSendButtonClicked(false);
    document.body.classList.remove('body-scroll-lock');
  };

  const handleFeedbackRetry = () => { 
    setIsSendButtonClicked(false);
    document.body.classList.remove('body-scroll-lock');
    handlePingOpen();
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar OnOpen={handlePingOpen}/>
         
         {isPingOpen && (
              <div style={{
          position: 'fixed',
          background: 'rgba(0,0,0,0.7)',
          width: '100%',
          height: '100%',
          zIndex: 1031,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Pingme setIsSuccessful={setIsSuccessful} setIsSendButtonClicked={setIsSendButtonClicked} onClose={handlePingClose} /></div>
         )}
 
        {isSendButtonClicked && (
              <div style={{
          position: 'fixed',
          background: 'rgba(0,0,0,0.7)',
          width: '100%',
          height: '100%',
          zIndex: 1031,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
         <EmailFeedback isSuccess={isSuccess} onExit={handleFeedbackClose} onRetry={handleFeedbackRetry}
         onAlright={handleFeedbackClose}/></div>
         )}

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home isPingOpen={isPingOpen} setIsPingOpen={setIsPingOpen}/>} />
          <Route path="/project" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
    
      </div>
    </Router>
  );
}

export default App;
