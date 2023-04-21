import React from 'react';
import './App.sass';
import Header from "./components/Header";
import styled from "@emotion/styled";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header/>
      <AppBody>
        <Outlet/>
      </AppBody>
    </div>
  );
}

export default App;


const AppBody = styled.div`
`
