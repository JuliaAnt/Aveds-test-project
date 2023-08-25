import Header from '../../components/header/header';

function MainPage(): JSX.Element {
    return (
        <>
            <Header />
            <main className='main-container'>
                <div className='title-container'>
                    <h1>Место для получения медицинской помощи</h1>
                    <button className='main-log-in'>Войти</button>
                    <button className='main-contacts'>Контакты</button>
                </div>
                <div className='service-container'>
                    <div className='service'>
                        <div className='service-logo'>
                            <img src='./img/online-recept.png' alt='Online-reception' />
                        </div>
                        <h3>Онлайн-прием</h3>
                        <div className='red-line'></div>
                        <p className='service-text'>Рыба текст</p>
                    </div>
                    <div className='service'>
                        <div className='service-logo'>
                            <img src='./img/emergency.png' alt='Emergency' />
                        </div>
                        <h3>Экстренный Случай</h3>
                        <div className='red-line'></div>
                        <p className='service-text'>Рыба текст</p>
                    </div>
                    <div className='service'>
                        <div className='service-logo'>
                            <img src='./img/treatment.png' alt='Treatment' />
                        </div>
                        <h3>Лечение рака</h3>
                        <div className='red-line'></div>
                        <p className='service-text'>Рыба текст</p>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainPage;
