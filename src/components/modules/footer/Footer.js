import React from 'react';
import './Footer.scss';

const Footer = () => {
    return ( 
        <div className='container-fluid bg-dark footer-container'>
            <div className=''>
                <h4>
                    BrandLogo
                </h4>

            </div>
            <div className='footer-sub-boxes'>
                <h6>About Us</h6>
                <a>About</a>
                <a>Support</a> 
                <a>Carrier</a>
            </div>
            <div className='footer-sub-boxes'>
            <h6>Shop</h6>
            <a>About</a>
                <a>Support</a> 
                <a>Carrier</a>
            </div>
            <div className='footer-sub-boxes'>
                <h6>Support</h6>
                <a>About</a>
                <a>Support</a> 
                <a>Carrier</a>
            </div>
            <div className='footer-sub-boxes'>
                <h6>Legal</h6>
                <a>About</a>
                <a>Support</a> 
                <a>Carrier</a>
            </div>
            
        </div>
     );
}
 
export default Footer;