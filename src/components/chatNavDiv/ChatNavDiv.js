import React from 'react';
import SearchBar from './SearchBar';
import ChatBubble from './ChatBubble';
import '../../stylesheets/ChatNavDiv.css';

class ChatNavDiv extends React.Component {
    render() {
        return(
            <div className="chat-nav-div">
                <SearchBar />
                <div className="chat-bubble-div">
                    <ChatBubble />
                    <ChatBubble />
                    <ChatBubble />
                    <ChatBubble />
                    <ChatBubble />
                    <ChatBubble />
                    <ChatBubble />
                    <ChatBubble />
                </div>
            </div>
        )
    }
}

export default ChatNavDiv;