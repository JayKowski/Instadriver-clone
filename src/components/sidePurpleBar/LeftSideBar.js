import React from 'react';
import SideNavBtns from './SideNavBtns';
import sideNavData from '../../renderData/sideNavData';
import '../../stylesheets/LeftSideBar.css';

function hideMenu() {
}

let showX = true;

class LeftSideBar extends React.Component {
    constructor() {
        super();
        this.handleShow = this.handleShow.bind(this);
    }
    
    handleShow() {
        const sideNav = document.querySelector('.side-bar-items');
        if(showX === true) {
            sideNav.style.display = "block";
            showX = false;
        } else {
            sideNav.style.display = "none";
            showX = true;
        }
        // let x = window.matchMedia("(max-width: 700px)");
        // console.log(x.matches && sideNav);
    }
    render() {
        // hideMenu()
        const v = window.matchMedia("(max-width: 700px)");
        const match = v.matches;
        return (
            <div className="left-side-bar">
                <ul className="side-bar-items">
                {match && (<span style={{display: 'none'}}><i className="fas fa-times"></i></span>)}
                    {
                        sideNavData.map((sN, i) => (
                            <SideNavBtns data={sN} key={i}/>
                        ))
                    }
                </ul>
                {match && (<span onClick={this.handleShow}className="sml-menu-icon"><i className="fas fa-bars"></i></span>)}
            </div>
        )
    }
} 

export default LeftSideBar;