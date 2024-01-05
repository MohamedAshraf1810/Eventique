import './Header.scss'
import content from '../../locales/en.json';
import Logo from '../../Static/Images/Logo/Logo_Black.webp'
import BrandLogo from '../BrandLogo/BrandLogo';

const Header = ({ calenderNavigate }) => {
    // Create a reference for the Calender

    return (
        <>
            <header className='brandHeader'>
                <div className="headerContainer">
                    <BrandLogo logo={Logo} />
                    <button className='BookCallBTN BookCallBTNHeaderResp' onClick={calenderNavigate}>{content.button.BookCall}</button>
                </div>
            </header>
        </>
    )
}

export default Header