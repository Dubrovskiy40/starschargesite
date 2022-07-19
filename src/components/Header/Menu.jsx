import "./_Header.scss"

const Menu = () => {

    return(
        <nav className='header__nav'>
            <ul className='header__nav__list'>
                <li className='header__nav__item'>
                    <a href='#l' className='header__nav__link'>О станции</a>          
                </li>
                <li className='header__nav__item'>
                    <a href='#l' className='header__nav__link'>Наша команда</a>             
                </li>
                <li className='header__nav__item'>
                    <a href='#l' className='header__nav__link'>Как это работает</a>
                </li>
                <li className='header__nav__item'>
                    <a href='#l' className='header__nav__link'>Новости</a>
                </li>
                <li className='header__nav__item'>
                    <a href='#l' className='header__nav__link'>Контакты</a>         
                </li>
            </ul>
        </nav>
    );
};

export default Menu;