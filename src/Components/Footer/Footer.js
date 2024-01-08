import React from 'react';
import './Footer.scss';
import Logo from '../../Static/Images/Logo/Logo_White.webp';
import BrandLogo from '../BrandLogo/BrandLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerContactData from '../../Data/FooterContactData';
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footerContainer">
                    <div className='footer-Brand-Logo'>
                        <BrandLogo logo={Logo} />
                    </div>

                    <div className='Brand-address'>
                        {footerContactData.map(data => {
                            return (
                                <div className='address-container' key={data.id}>
                                    <FontAwesomeIcon icon={data.icon} /> &nbsp;
                                    {/* 1 is the id For email */}
                                    {/* 2 is the id For phone */}

                                    {data.id === '1' ? (
                                        <a href={`mailto:${data.Data}`}>{data.Data}</a>
                                    ) : data.id === '2' ? (
                                        <a href={`tel:${data.Data}`}>{data.Data}</a>
                                    ) : (
                                        <span>{data.Data}</span>
                                    )}
                                </div>

                            )
                        })}
                    </div>
                </div>
                <div className='terms_conditions'>
                    &copy; 2023 Eventeque. All rights reserved |
                    Terms & Conditions  {/*| <Contactus /> */}

                </div>
            </footer>
        </>
    )
}

export default Footer