import React from 'react';
import '../../stylesheets/MenuBtn.css';

class MenuBtn extends React.Component {
    render() {
        return (
            <div className="menu-btn-div">
                <span>Menu</span>
                <span><img src="https://instadriver.co/img/menu.svg" alt=""/></span>
            </div>
        )
    }
}

export default MenuBtn;