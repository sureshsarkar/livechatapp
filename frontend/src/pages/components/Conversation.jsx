import React from "react";
import Message from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const Conversation = () => {
  const onChatSelected = true;
  return (
    <>
      <div className="topBar">
        <h1>Welcome to Livechat App</h1>
      </div>
 {onChatSelected?(
  <NoChatSelected/>
 ):(
   <>
   <div className="messageScrollBar">
   <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message/>
      </div>
      <MessageInput/>
      </>
      )}
    </>
  );
};

export default Conversation;
