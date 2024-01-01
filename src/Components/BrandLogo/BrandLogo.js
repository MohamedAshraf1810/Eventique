import React from 'react'
import './BrandLogo.scss'
const BrandLogo = ({ logo }) => {
    return (
        <div className="brandLogo">
            <img className='brandLogoIMG' src={logo} alt="Logo" />
        </div>
    )
}

export default BrandLogo