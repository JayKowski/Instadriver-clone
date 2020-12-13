import React from 'react';
import '../../stylesheets/ChatBubble.css';

class ChatBubble extends React.Component {
    render() {
        let x = window.matchMedia("(max-width: 700px)")
        let match = x.matches;
        if(!match) {
            return (
                <div className="chat-bubble">
                    <div className="user-data">
                        <img width="60px"alt="" src="https://images.generated.photos/RUfR8aHYL4smS-ULpIGSX0v-V62l7Kz3fNbJvQl6mdU/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzkyNjRfMDUx/MjkxOV8wNTU4NDYw/LmpwZw.jpg"/>
                        <p className="full-name">Shirly Cook</p>
                        <p className="username">@JohntheD</p>
                    </div>
                    <div className="chat-data">
                        <span className="chat-id">Chat ID: 3362Gd2</span>
                        <h3 className="chat-subject">Inquiry about reloca...</h3>
                        <p className="chat-msg">Vacancy ads help you attract<br /> potential hires who are.....</p>
                        <span className="chat-num">4</span>
                        <span className="chat-timestamp">11:00 a.m</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="sml-chat-nav">
                    <div className="user-data">
                        <img width="60px"alt="" src="https://images.generated.photos/RUfR8aHYL4smS-ULpIGSX0v-V62l7Kz3fNbJvQl6mdU/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzkyNjRfMDUx/MjkxOV8wNTU4NDYw/LmpwZw.jpg"/>
                        <p className="full-name">Shirly Cook</p>
                        <p className="username">@JohntheD</p>
                    </div>
                </div>
            )
        }
    }
}
export default ChatBubble;