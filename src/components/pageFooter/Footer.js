import React from 'react';
import footerData from '../../renderData/footerData';
import FooterLinkDiv from './FooterLinkDiv';
import socialMediaLinks from '../../renderData/socialMediaLinks';
import SocialMedia from "./SocialMedia";
import '../../stylesheets/Footer.css';

class PageFooter extends React.Component {
    render() {
        return (
            <div className="footer">
                <img src="https://instadriver.co/img/footerlogo.svg" alt=""/>
                <div className="footer-links-container">
                    {
                        footerData.map(links => (
                            <FooterLinkDiv data={links} />
                        ))
                    }
                <ul className="social-med-links">
                    <h4>Social Media</h4>
                    {
                        socialMediaLinks.map( link => (
                            <SocialMedia data={link}/>
                            ))
                        }
                </ul>
                <div className = "footer-links">
                    <h4 >Contact Info</h4>
                    <a className="link" href="#root" >saysomething@instadriver.co </a>
                </div>
                </div>
            </div>
        )
    }
}

export default PageFooter;