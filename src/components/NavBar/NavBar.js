import React from 'react';
import NavBtn from '../navBtns/NavBtn';
import navBtns from '../../renderData/navBtnData';
import '../../stylesheets/NavBar.css';

let menuClicked = true;

class NavBar extends React.Component {
    constructor() {
        super();
        this.HandleMenuClick = this.HandleMenuClick.bind(this);
    }

    HandleMenuClick() {
        const x = window.matchMedia("(max-width: 700px)");
        const match = x.matches;
        if(match) {
            const info = document.querySelector('.sml-menu');
            if(menuClicked === true) {
                info.style.display = "flex";
                menuClicked = false;
            } else {
                info.style.display = "none";
                menuClicked = true;
            }
        } else {
            return false;
        }
    }

    render() {
        const x = window.matchMedia("(max-width: 700px)");
        const match = x.matches;
        return (
            <div className="navbar-div">
                <div className="nav-items-container">
                    <div className="nav-logo">
                        <img src="https://instadriver.co/img/logo.svg" alt=""/>
                    </div>
                    <ul className="btn-items">
                        {
                            navBtns.map( (n, i) => (
                                <li data-key={`${i}`} className="nav-btn"><NavBtn data={n}/></li>
                            ))
                        }
                        {
                            match && (<div style={{display: 'none'}}className="sml-menu">
                                <span>Jobs</span>
                                <span>Get Social</span>
                                <span>James Keem</span>
                            </div>)
                        }
                        <li className="menu-btn-div" onClick={this.HandleMenuClick}>
                            <span>Menu</span>
                            <span><img src="https://instadriver.co/img/menu.svg" alt=""/></span>
                        </li>
                    </ul>
                </div>
                <div className="empty-div"></div>
            </div>
        )
    }
}

export default NavBar;