import React, { useState } from "react";
import { AiFillCloseCircle, AiOutlineFullscreenExit, AiOutlineSend } from "react-icons/ai";
import { FaTerminal } from "react-icons/fa";
import Particle from "./Particle";
import emailjs from 'emailjs-com';

function Pingme({ onClose, setIsSuccessful, setIsSendButtonClicked }) {
    const handleExitButtonClick = () => {
        // Call the onClose function passed from the parent

        onClose();
      
      };

      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
  
      const handleSubmit = (e) => {
          e.preventDefault();
  
          emailjs.send('service_2vm8l299', 'template_vmx2qxh', {
              from_name: email,
             // to_email: 'YOUR_EMAIL_ADDRESS', // Your email address where you want to receive the email
             // subject: 'Subject provided by the user', // You can modify this based on your requirement
              message: message
          }, 'aIbqtGqk4Rhw7UrlQ')
          .then((response) => {
              console.log('Email sent successfully:', response.text);
              // Clear the form after successful submission
              setEmail('');
              setMessage('');
              setIsSuccessful(true)

              handleExitButtonClick();
               setIsSendButtonClicked(true);
               document.body.classList.add('body-scroll-lock');

          }, (error) => {
              setIsSuccessful(false)
              console.error('Email sending failed:', error);

              handleExitButtonClick();
          setIsSendButtonClicked(true);
          document.body.classList.add('body-scroll-lock');

          });
          
      };

  return(
    <div style={{height: 310, width: '90%',maxWidth: 600, borderRadius: 10, overflow: 'hidden'}}>
       <div style={{background: 'rgb(40,40,40)', display: 'flex', alignItems: 'center', padding: 20, paddingTop: 12,
                   paddingBottom: 12, overflow: 'hidden'}}>
      
           <span>
             <FaTerminal size={18} color="#6cbf57"/>
           </span>
           
            <span  style={{display: "flex", float: 'right', display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
             <AiFillCloseCircle onClick={() => {handleExitButtonClick()}} style={{cursor: 'pointer'}} size={18} color="#6cbf57"/>
            </span>
       </div>
       <div style={{background: 'rgb(90,90,90)', height: 300, width: '100%',maxWidth: 600, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, overflow: 'hidden'}}>
       <h5 style={{marginTop: 20, marginBottom: 15}}>Send me a mail &#128522;</h5>
                <form onSubmit={handleSubmit} style={{paddingLeft: 20, paddingRight: 20}}>
                    <div  style={{alignItems: 'baseline', display: 'flex', marginBottom: 20}}>
                        <span style={{display: 'inline-flex',width: 80, justifyContent: 'flex-end', marginRight: 5}}>
                                <label htmlFor="email" >Email:</label>
                        </span>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{width: '100%',borderRadius: 10, outline:'none', border: 'none',  paddingLeft: 8, paddingRight: 8}}
                            placeholder="Enter your email"
                            required
                        />
                    </div>


                    <div style={{alignItems: 'baseline', display: 'flex'}}>
                    
                    <span style={{display: 'inline-flex',width: 80,justifyContent: 'flex-end',marginRight: 5}}>
                             <label htmlFor="message">Message:</label>
                        </span>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{width: '100%', height: 90, borderRadius: 10, outline:'none', paddingLeft: 7, paddingRight: 7}}
                        placeholder="Enter the message"
                        
                        required
                    />
                    </div>
                    <button type="submit" style={{background: '#6cbf57', color: 'rgb(250,250,250)' , borderRadius: 10, marginTop: 10, padding: 5, paddingLeft: 7, paddingRight: 7}}>
                    Send Message 
                    <AiOutlineSend style={{ marginLeft: 10,fontSize: "1.1em" }} />
                    </button>
                </form>
       </div>
    </div>
  );
}

export default Pingme;