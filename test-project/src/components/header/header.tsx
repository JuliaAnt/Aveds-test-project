function Header(): JSX.Element {
    return (
        <header className='header'>
            <div className='logo-container'>
                <img src='./img/logo.png' alt='Logo' />
            </div>
            <div className='buttons-container'>
                <button className='contacts'>Контакты</button>
                <button className='log-in'>Войти</button>
            </div>
        </header>
    );
}

export default Header;
