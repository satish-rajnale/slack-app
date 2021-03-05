import { Button } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
function LogIn() {

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }


    return (
        <LogInContainer>
            <LogInIneerContainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
            
            <h1>Sign In to NB Community</h1>
            <p>NB.slack.com</p>
           
            <Button onClick={signIn}>
                Sign In with Google
            </Button>
            </LogInIneerContainer>
        </LogInContainer>
    )
}

export default LogIn


const LogInContainer = styled.div`
background-color:#f8f8f8;
height:100vh;
display:grid;
place-items:center;
`;

const LogInIneerContainer = styled.div`
padding:100px;
text-align:center;
align-items:center;

background-color:white;
border-radius:10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0 ,0,00,0.24);


>img {
    object-fit:contain;
    height:100px;
    margin-bottom:30px;
}

>button {
    margin-top:30px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color:white;
}
`;