import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import "./SupportChat.scss"
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import { BsFillChatLeftDotsFill, BsCaretDownSquareFill } from 'react-icons/bs';

function SupportChat() {
  const [number, setNumber] = useState(0);
  const style = { color: "#A72121" }




  return (
    <div className='chatbot'>
      {number === 1 ? (<>
        <BsCaretDownSquareFill style={style} onClick={() => setNumber(0)} />
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}></Chatbot>
      </>
      ) : number !== 1 &&
      <BsFillChatLeftDotsFill style={{ color: "#F68B3C" }} onClick={() => setNumber(1)} />
      }
    </div>
  );
}
export default SupportChat;
