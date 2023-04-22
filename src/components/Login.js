import React from 'react';
import styled from "@emotion/styled";
import {Button} from "@mui/material";
import {signInWithPopup} from "firebase/auth";
import {auth, provider} from "../firebase";


const Login = () => {
  const signInToApp = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider).catch(e => alert(e.message))
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.iconfinder.com%2Fdata%2Ficons%2Fsocial-media-2285%2F512%2F1_Slack_colored_svg-512.png&f=1&nofb=1&ipt=77059351baf77ef497ac7001b980251dd8294110e52c44f8dd632aa4bf52ceee&ipo=images"
          alt=""/>
        <h1>Sign in to the chat</h1>
        <p>pullso.slack.com</p>
        <Button onClick={signInToApp}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    color: white;
    background-color: #0a8d48 !important;
  }

`
