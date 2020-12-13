import React from 'react';
import '../../stylesheets/SocialMedia.css'

class SocialMedia extends React.Component {
    render() {
        return (
            <li className="med-link"><img alt="" src={this.props.data.link}/></li>
        )
    }
}

export default SocialMedia;