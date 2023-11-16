function Header(): JSX.Element {
    return (
        <header className='header'>
            <div className='header-wrapper'>
                <div className='logo-container'>
                    <img src='./img/logo_react_48.png' alt='Logo' />
                </div>
                <div className='buttons-container'>
                    <button className='contacts'>Контакты</button>
                    <button className='log-in'>Войти</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
