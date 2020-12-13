import React from 'react';

class NavBtn extends React.Component {
    render() {
        return (
            <span>{this.props.data.name}</span>
        )
    }
}

export default NavBtn;