import React from 'react';
import '../../stylesheets/MessageBubble.css';

const paragStyle1 = {
    float: 'left',
    backgroundColor: '#E6E6FF',
    borderRadius: '10px 10px 10px 0',
    marginLeft: 25,
}

const paragStyle2 = {
    float: 'right',
    backgroundColor: '#EBE5F5',
    borderRadius: '10px 10px 0 10px',
    marginRight: 25,
}

const msgFtrStyle1 = {
    textAlign: "right",
    paddingRight: 35,
}

const msgFtrStyle2 = {
    textAlign: "left",
    paddingLeft: 25,
}

const msgAndDlt1 = {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
}
const msgAndDlt2 = {
    display: "flex",
    flexDirection: "column",
}

const msgBubble1 = {
    justifyContent: "flex-end",
}

const msgBubble2 = {
    justifyContent: 'none',
}

// let hover = true;

class MessageBubble extends React.Component {
    constructor() {
        super();
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(e) {
        if(e.target.className === 'mess-parag') {
            const parent = e.target.parentElement.parentElement;
            const delDiv = parent.children[1];
            console.log(e);
            // const dltDiv = document.querySelector('.dlt-div');
                // dltDiv.style.display = "block";
        }
    }
    render() {
        const { data, index } = this.props;
        return (
            <div onMouseOver={this.handleHover} className="msg-bubble" style={data.float === 'right' ? msgBubble1 : msgBubble2}>
                <div className="msg-and-dlt" style={data.float === 'right' ? msgAndDlt1 : msgAndDlt2}>
                    <p data-index={index}className="mess-parag" style={data.float === 'left' ? paragStyle1 : paragStyle2}>{data.mess}</p>
                    <div className="msg-bubble-ftr" style={data.float === 'left' ? msgFtrStyle2 : msgFtrStyle1}>
                        <span className="msg-timestamp">11.00 a.m </span>
                        {data.float === "right" && (<span className="msg-ackg"><i class="fas fa-check-double"></i></span>)}
                    </div>
                </div>
                <div data-num={index} style={{display: 'none'}} className="dlt-div">
                    {data.float === "right" && (<span><i class="fas fa-trash"></i></span>)}
                </div>
            </div>
        )
    }
}

export default MessageBubble;