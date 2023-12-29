import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="footerContainer">
                    <div className='footer-Brand-Logo'>
                        <span className='BrandLogo'>Eventeque</span>
                        <span className='BrandExtension'>.co</span>
                    </div>

                    <div className='Brand-copyrights'>
                        &copy; 2023 Excel travel. All rights reserved<br />
                        | Terms & Condition
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer