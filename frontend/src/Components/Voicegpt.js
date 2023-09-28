import React, {useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// import GptUI from './components/chatGptUI.js';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './VoiceGPT.css'; // Import your custom CSS file for styling
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function Voice() {
  const  {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
  const [response, setResponse] = useState('');
//   const [prompt, setPrompt] = useState('');
//   const [response, setResponse] = useState('');
  const [showChat, setShowChat] = useState();
  // console.log(transcript);
  if(!browserSupportsSpeechRecognition){
    return null;
  }

  const handleStart = () => SpeechRecognition.startListening({ continuous: true });


  const handleStop = () => SpeechRecognition.stopListening();


  const handleSubmit = async() => {
    // e.preventDefault();
    console.log(transcript);

    let fullPrompt = transcript; // Initialize with the prompt text
    // Check if specific conditions are met to include the code
    // if (shouldIncludeCode()) {
    //   fullPrompt += `\n${code}`;
    // }

    try {
      const res = await axios.post('http://localhost:8000/gpt', { prompt: fullPrompt });

      // Replace line breaks with HTML line breaks for formatting
      const formattedResponse = res.data.replace(/\n/g, '<br/>');
      console.log(formattedResponse);
      setResponse(formattedResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // const Askgpt = () => ChatGPT({transcript});
  
  const handleChatClick = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };
  const renderTooltip = (props) => (
    <Tooltip id="tooltip" {...props}>
      Voice Assistance
    </Tooltip>
  );
  return (
    // <div className="App container">
      
    //   <h1>Voice with GPT</h1>

    //  <div id="main-content">
    //      here finally text will be displayed:
    //      <p>{transcript}</p> 
    //   </div>

    //   <input className='btn btn-outline-success mx-10' type="button"  onClick={handleStart} value="Start listening" />
    //   <input className='btn btn-outline-primary mx-10' type="button" onClick={handleStop} value="Stop listening" />
    //  <input className='btn btn-outline-info mx-10' type="button" onClick={handleSubmit} value="Ask GPT" />  
    //  {response && (
    //         <div>
    //           <h3>Response:</h3>
    //           {/* /* Use dangerouslySetInnerHTML to render HTML * */}
    //           <p dangerouslySetInnerHTML={{ __html: response }} />
    //         </div>
    //       )}
    
    // </div>

    <div className="fixed-chat-icon1">
      <OverlayTrigger
        placement="top"
        color="success"
        overlay={renderTooltip}
        delay={{ show: 250, hide: 400 }}
      >
        <Button
          variant="outline-secondary"
          onClick={handleChatClick}
          className="chat-icon-btn1 p-0"
        >
            <img style={{ height: "26px", marginBottom: "6px", fill: "currentColor" }} src="https://freesvg.org/img/noun_project_171.png"></img>
          {/* <svg style={{ height: "26px", marginBottom: "6px", fill: "currentColor" }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z" /></svg> */}
        </Button>
      </OverlayTrigger>
    <Modal show={showChat} onHide={handleCloseChat} className="chat-modal">
        <Modal.Header closeButton>
          <Modal.Title>Voice with GPT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        here Prompt text will be displayed:
         <p>{transcript}</p> 

        {response && (
            <div>
              <h3>Response:</h3>
              {/* /* Use dangerouslySetInnerHTML to render HTML * */}
              <p dangerouslySetInnerHTML={{ __html: response }} />
            </div>
          )}
    
        </Modal.Body>
        <Modal.Footer>
           <input className='btn btn-outline-success mx-10' type="button"  onClick={handleStart} value="Start listening" />
       <input className='btn btn-outline-primary mx-10' type="button" onClick={handleStop} value="Stop listening" />
     <input className='btn btn-outline-info mx-10' type="button" onClick={handleSubmit} value="Ask GPT" />  
        </Modal.Footer>
      </Modal> 
     </div>




  );
}

export default Voice;
