import React from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import styled from "@emotion/styled";
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarOption from "./SidebarOption";
import {collection} from "firebase/firestore";
import {auth, db} from "../firebase";
import {useCollection} from 'react-firebase-hooks/firestore';
import {useAuthState} from "react-firebase-hooks/auth";


const Sidebar = () => {
  const [user] = useAuthState(auth)

  const [channels] = useCollection(collection(db, 'rooms'))

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarHeaderInfo>
          <h2>Pullso chat App</h2>
          <h3>
            <FiberManualRecordIcon/>
            {user?.displayName}
          </h3>

        </SidebarHeaderInfo>
        <CreateIcon/>
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
      <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
      <SidebarOption Icon={BookmarkBorderIcon} title="Chanel browser"/>
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
      <SidebarOption Icon={AppsIcon} title="Apps"/>
      <SidebarOption Icon={FileCopyIcon} title="File browser"/>
      <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
      <hr/>
      <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
      <hr/>
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption/>
      {channels?.docs.map(doc => (
        <SidebarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  border-top: 1px solid #49274b;
  flex: 0.3;
  max-width: 260px;
  margin-top: 60px;
  overflow: auto;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`
const SidebarHeader = styled.div`
  display: flex;
  padding: 13px;
  border-bottom: 1px solid #49274b;

  > .MuiSvgIcon-root {
    padding: 8px;
    font-size: 18px;
    background-color: #fff;
    border-radius: 999px;
    color: #49274b;
  }
`
const SidebarHeaderInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`
