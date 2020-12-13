import React from 'react';
import MessageBubble from './MessageBubble';
import messageData from '../../renderData/messageData';
import '../../stylesheets/ConverseDiv.css';

let elipseClicked = true;
let contactClicked = true;

class ConverseDiv extends React.Component {
    constructor() {
        super();
        this.handleElipseClick = this.handleElipseClick.bind(this);
        this.handleContactClick = this.handleContactClick.bind(this);
    }

    handleContactClick() {
        const info = document.querySelector('.contact-info');
        if(contactClicked === true) {
            info.style.display = "block";
            contactClicked = false;
        } else {
            info.style.display = "none";
            contactClicked = true;
        }
    }

    handleElipseClick() {
        const div = document.querySelector('.chat-actions');
        if(elipseClicked === true) {
            div.style.display = "block";
            elipseClicked = false;
        } else {
            div.style.display = "none";
            elipseClicked = true;
        }
    }

    render() {
        return (
            <div className="converse-div">
                <div className="chat-btn-div">
                    <button className="start-chat-btn"><i className="fas fa-plus"></i>Start a new chat</button>
                </div>
                <div className="body-container">
                <header className="converse-header">
                    <div className="converse-user-details">
                        <img alt="" width="65"src="https://images.generated.photos/RUfR8aHYL4smS-ULpIGSX0v-V62l7Kz3fNbJvQl6mdU/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzkyNjRfMDUx/MjkxOV8wNTU4NDYw/LmpwZw.jpg"/>
                        <p className="user-fname">Shirly Cook</p>
                        <p className="username">@JohntheD</p>
                    </div>
                    <h3 className="converse-heading">Inquiry about relocation from Nairobi</h3>
                    <div className="contact-info" style={{display: 'none'}}>
                        <h4 className="contact-heading"><i className="fas fa-info"></i> Contact Info</h4>
                        <div className="contact-number">
                            <span className="info-name">Mobile Number</span>
                            <span className="info-tab">0733221133</span>
                        </div>
                        <div className="contact-email">
                            <span className="info-name">Email Address</span>
                            <span className="info-tab">johndoe@gmail.com</span>
                        </div>
                    </div>
                    <button className="info-button" onClick={this.handleContactClick}><i className="fas fa-info"></i> contact Info</button>
                    <div className="chat-actions" style={{display: 'none'}}>
                        <span className="chat-action">Close Chat</span>
                        <span className="chat-action">Delete Chat</span>
                    </div>
                    <span onClick={this.handleElipseClick} className="elipse-menu"><i className="fas fa-ellipsis-v"></i></span>
                </header>
                <div className="chat-id-div">
                    <span className="msg-chat-id">chatID: 3362Gd2</span>
                </div>
                <div className="chats-div">
                    {
                        messageData.map( (m, i) => (
                            <MessageBubble data={m} index={i}/>
                        ))
                    }
                </div>
                <footer className="converse-footer">
                    <div className="send-message">
                        <input className="msg-input"placeholder="Type your message"></input>
                        <div className="msg-controls">
                            <div className="msg-media">
                                <span className="media-icon"><i className="fas fa-paperclip"></i></span>
                                <span className="media-icon"><i className="far fa-smile"></i></span>
                                <span className="media-icon"><i className="fas fa-microphone"></i></span>
                            </div>
                            <div className="msg-send">
                                <span className="media-icon send-msg"><i className="far fa-paper-plane"></i></span>
                            </div>
                        </div>
                    </div>
                </footer>
                </div>
            </div>
        )
    }
}

export default ConverseDiv;