import { InfoOutlined, Message, StarBorderOutlined } from '@material-ui/icons';
import AssistantOutlinedIcon from '@material-ui/icons/AssistantOutlined';
import React, { useRef , useEffect} from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import Messages from './Messages';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore';
import { db } from '../firebase';


function Chat() {

const chatRef = useRef(null);

const roomId = useSelector(selectRoomId);
const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
);
const [roomMessage, loading] = useCollection(
    roomId && 
    db
    .collection("rooms")
    .doc(roomId)
    .collection("messages")
    .orderBy("timestamp", "asc")
);
 
useEffect(() => {
    chatRef?.current?.scrollIntoView({
        behavior: "smooth"
    });
}, [roomId, loading]);


    return (
        <ChatContainer>
            {roomDetails && roomMessage && (
                <>
            <Header>
                <HeaderLeft>
                    <h4>#{roomDetails?.data().name}</h4>
                    <AssistantOutlinedIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlined /> Details
                    </p>
                </HeaderRight>
            </Header>
            

            <ChatMessages>
                {roomMessage?.docs.map((doc) => {
                    const {message, timestamp, user , userImg} = doc.data();

                    return (
                        <Messages
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImg={userImg}/>
                    )
                })}

                <ChatBottom ref={chatRef}/>
            </ChatMessages>
            <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} channelId={roomId}/>
            </>
            )}
        </ChatContainer>
    )
}

export default Chat;


const ChatBottom = styled.div`
padding-bottom:100px;
`;

const Header = styled.div`
display:flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    display:flex;
    align-items:center;
    >h4{
        text-transform:lowercase;
        display:flex;
        margin-right:10px;
    }
    > .MuiSvgIcon-root{
        margin-left:8px;
        font-size:22px;
        :hover{
            cursor: pointer;
        }
    }
`;

const HeaderRight = styled.div`
    > p {
        display:flex;
        align-items:center;
        font-size:14px;
    }

    > p > .MuiSvgIcon-root{
        margin-right:  5px !important ;
        font-size:20px;
        :hover{
            cursor: pointer;
        }
    }
`;


const ChatContainer = styled.div`
    flex:0.7;
    flex-grow:1;
    overflow-y:scroll;
    margin-top:60px;
    height:100%;
`;

const ChatMessages = styled.div``;