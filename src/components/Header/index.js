import Logo from '/var/www/html/Perso/Portfolio/my-app/src/assets/Logo.png';

import { Link } from 'react-router-dom';

import React from 'react';

const Header = () => {

    return (
        <div className='header__container'>
            <h1>Hello world</h1>
            <img src={Logo} alt='mia-fullstack-developer' className='logo' />
        </div>
    )
}

export default Header