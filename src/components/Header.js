import React from "react";
import SendIcon from "@material-ui/icons/Send";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { auth } from "../firebase";
import {useAuthState} from 'react-firebase-hooks/auth';






function Header() {
const [user] = useAuthState(auth);



  return (
    <HeaderContainer>
      {/*  Header left*/}
      <HeaderLeft>
        <HeaderAvatar 
        onClick={()=>auth.signOut()}
        alt={user?.displayName}
        src={user?.photoURL}
        />
        <AccessTimeIcon/>
      </HeaderLeft>

      {/*  Header search*/}
      <HeaderSearch>
       
       <input placeholder="Search here..."/>
       <SearchIcon/>
      </HeaderSearch>
      {/*  Header right*/}
      <HeaderRight>
       <HelpOutlineIcon/>
       </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
 margin:0;
  display:flex;
  background-color: #4A154B;
  width:100%;
  position:fixed;
  align-items:center;
  justify-content: space-between;
  padding: 10px 0;
  color:white;

`;
const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left:20px;

>.MuiSvgIcon-root{
  margin-left:auto;
  margin-right:30px;
}
`;
const HeaderSearch = styled.div`
  display:flex;
  flex:0.4;
  color:gray;
 
  border-radius:6px;
  padding: 0 50px;
  border: 1px gray solid;

>input{
  background-color:transparent;
  border:none;
  text-align:left;
  min-width:30vw;
  outline:0;
  color:white;
}

`;
const HeaderRight = styled.div`
  
  flex:0.3;
  color:white;
  display:flex;
  align-items:flex-end;
>.MuiSvgIcon-root{
  margin-left:auto;
 margin-right:20px;
} 
`;
const HeaderAvatar = styled(Avatar)`

:hover{
  cursor: pointer;
  opacity: 0.9;
}

`;