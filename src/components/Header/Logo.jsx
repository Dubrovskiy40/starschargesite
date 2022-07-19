import header from './img/logo.svg'
import "./_Header.scss"

const Logo = () => {

    return(
        <a href='#l' className='header__logo__link'>
            <img src={header} alt='logo' className='header__logo'></img>
        </a>
    );
};

export default Logo;