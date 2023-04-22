import React, {useState} from 'react';
import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import {auth, db} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";

const ChatInput = ({channelId, channelName, chatRef}) => {
  const [user] = useAuthState(auth)
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault()
    if (!channelId) return false
    addDoc(collection(db, `rooms/${channelId}/messages`), {
      message: input,
      timestamp: serverTimestamp(),
      user: user?.displayName,
      userImg: user?.photoURL
    });

    chatRef?.current?.scrollIntoView({behavior: "smooth"})
    setInput('')
  }

  return (
    <ChatInputContainer>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text"
               placeholder={`Message #${channelName}`}/>
        <Button hidden type="submit" onClick={sendMessage}>SEND</Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`
