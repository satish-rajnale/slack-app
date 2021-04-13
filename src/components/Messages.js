import React from 'react';
import styled from 'styled-components';


function Message({message, user, timestamp, userImg}) {
    if(timestamp!==null){
        console.log(timestamp)
    var time = new Date(timestamp?.toDate()).toUTCString().toLowerCase()
var extractedTime = time.split(' ')[4].split(":").slice(0,2).toString().replace(",", ":");}
    return (
        <MessageContainer>
            <img src={userImg } alt=""/>
            <MessageInfo>
                <h4>
                    {user} :<span>{extractedTime!==undefined ? extractedTime : "just now" }</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message;


const MessageContainer = styled.div`
display:flex;
align-items:center;
font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 1.46668;
  font-weight: 700;
padding:20px;
>img{
    height:40px;
    width:40px;
    border-radius:999px;
}
`;

const MessageInfo = styled.div`
padding-left:10px;

>h4{
    color:black;
    font-size:16px;
    font-weight:800;
}

>h4>span{
    color:gray;
    
    margin-left:4px;
    font-size:14px;
    font-weight:100;
}
>p{

    font-weight:200;
}

`;
