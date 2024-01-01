import React from 'react'
import './Footer.scss'
import Logo from '../../Static/Images/Logo/Logo_White.png'
import BrandLogo from '../BrandLogo/BrandLogo'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footerContainer">
                    <div className='footer-Brand-Logo'>
                        <BrandLogo logo={Logo} />
                    </div>

                    <div className='Brand-copyrights'>
                        &copy; 2023 Eventeque. All rights reserved<br />
                        | Terms & Condition
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer