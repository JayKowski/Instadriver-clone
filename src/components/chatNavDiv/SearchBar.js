import React from 'react';
import '../../stylesheets/SearchBar.css';

let clicked = true;

class SearchBar extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const form = document.querySelector('.filter-form');
        if(clicked === true) {
            form.style.display = "block";
            clicked = false;
        } else {
            form.style.display = "none";
            clicked = true;
        }
    }
    render() {
        return (
            <div className="chat-search">
                <div>
                    <i className="fas fa-search"></i>
                    <input className="search-box" placeholder="Search users, messages or chat id's"></input>
                </div>
                <form className="filter-form" style={{display: 'none'}}>
                    <h3>Filters</h3>
                    <select required>
                        <option value="" disabled selected hidden>message statuses</option>
                        <option value="0">Read messages</option>
                        <option value="1">Unread message</option>
                        <option value="2">Opened but not responded</option>
                        <option value="3">Ongoing discussion</option>
                        <option value="4">Ended discussion</option>
                    </select>
                    <select required>
                        <option value="" disabled selected hidden>Time of messages</option>
                        <option value="0">Last hour</option>
                        <option value="1">!2 Hrs ago</option>
                        <option value="2">Today</option>
                        <option value="3">This week</option>
                        <option value="4">This month</option>
                        <option value="5">This year</option>
                    </select>
                    <button>Apply Filters</button>
                </form>
                <span className="filter-btn">< i className="fas fa-sort-amount-down-alt" onClick={this.handleClick}></i></span>
            </div>
        )
    }
}

export default SearchBar;