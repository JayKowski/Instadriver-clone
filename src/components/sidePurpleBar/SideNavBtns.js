import React from 'react';
import '../../stylesheets/SideNavBtns.css';

class SideNavBtns extends React.Component {
    render() {
        return (
            <li data-key={`${this.props.key}`}className="left-nav-li">
                <span className="left-nav-logo"><i className={this.props.data.cName}></i></span>
                <span className="left-nav-btn">{this.props.data.btnName}</span>
            </li>
        )
    }
}

export default SideNavBtns;