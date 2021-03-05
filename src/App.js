import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.js"
import styled from  "styled-components";
import Chat from "./components/Chat.js";
import { auth } from "./firebase.js";
import {useAuthState} from 'react-firebase-hooks/auth';
import LogIn from "./components/LogIn.js";
import Spinner from 'react-spinkit';





function App() {
const [user, loading] = useAuthState(auth);

if(loading){
  return(
    <AppLoading>
      <ApploadingContents>
        <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
        <Spinner name="ball-spin-fade-loader" 
        color="purple" fadeIn="none"
        />     
      </ApploadingContents>
    </AppLoading>
  )
}
  return (
    
    <Router>
      
      {!user ? (<LogIn/>) : 
      <> 
        <Header />
        <AppBody>
          <Sidebar  />
        <Switch>
          <Route path="/" exact>
            <Chat />
          </Route>
        </Switch>
        </AppBody>
      </>
      }
    
     
    </Router>
  );
}

export default App;

const AppBody = styled.div`
display:flex;
height: 100vh;

`;

const AppLoading = styled.div`
display:grid;
place-items:center;
height:100vh;
width:100%;
`;

const ApploadingContents = styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

>img{
  height:100px;
  padding:20px;
  margin-bottom:50px;
}`;