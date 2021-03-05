import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import {useCollection} from 'react-firebase-hooks/firestore';
import {db} from '../firebase';

function Sidebar() {

    const [channels, loading, error] = useCollection(db.collection("rooms"));
    
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Anime FAM HQ</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        NB 117
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>

            <SidebarOptions Icon={InsertComment}  title="Threads"/>
            <SidebarOptions Icon={Inbox}  title="Mentions & Reactions"/>  
            <SidebarOptions Icon={Drafts}  title="Saved Items"/>            
            <SidebarOptions Icon={BookmarkBorder}  title="Channel Browser"/>  
            <SidebarOptions Icon={PeopleAlt}  title="People & user Groups"/>  
            <SidebarOptions Icon={Apps}  title="Apps"/> 
            <SidebarOptions Icon={FileCopy}  title="File Browser"/>  
            <SidebarOptions Icon={ExpandLess}  title="Show Less"/>   
            <hr/>
            <SidebarOptions Icon={ExpandMore}  title="Channels"/>   
            <hr/>
            <SidebarOptions Icon={Add} addChannelOption title="Add Channel"/>   
            {
                channels?.docs.map((doc) => (
                    <SidebarOptions 
                    key={doc.id}
                    id={doc.id}
                   
                    title={doc.data().name} /> 
                ))
             }
             
        </SidebarContainer>
    )
};

export default Sidebar;


const SidebarContainer  = styled.div`
background-color:#4A154B;;
color:white;
flex:0.3;
border-top: 1px solid #492746;
margin-top: 60px;
max-width:260px;

height:fit-content;

>hr{
    margin-top:10px;
    margin-bottom:10px;
    border:1px solid #49274b;
}
`;


const SidebarHeader  = styled.div`
display:flex;
padding:13px;
border-bottom: 1px solid #49274b;
>.MuiSvgIcon-root{
    border-radius:999px;
    padding:8px;
    
    color:#49274b;
    font-size:18px;
    background-color:white;
  
}
`;


const SidebarInfo  = styled.div`
flex:1;
>h2{
    font-size:15px;
    font-weight:900;
    margin-bottom: 5px;
}
>h3{
    display:flex;
    font-size:13px;
    font-weight:400;
    align-items: center;
}
>h3 > .MuiSvgIcon-root{
font-size:14px;
margin-top:1px;
margin-right:2px;
color:green;

}
`;