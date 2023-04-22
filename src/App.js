import React from 'react';
import './App.sass';
import Header from "./components/Header";
import styled from "@emotion/styled";
import {Outlet} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Login from "./components/Login";

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <Loader/>
      </AppLoading>
    )
  }

  return (
    <div className="app">
      {!user
        ? <Login/> :
        <>
          <Header/>
          <AppBody>
            <Sidebar/>
            <Chat/>
            <Outlet/>
          </AppBody>
        </>
      }
    </div>
  );
}

export default App;


const AppBody = styled.div`
  display: flex;
  height: 100vh;
`

const AppLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
`

const Loader = styled.div`
  display: block;
  width: 50px;
  height: 50px;
  border: 8px solid #f2f2f2;
  border-top: 8px solid var(--slack-color);
  border-radius: 50%;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
