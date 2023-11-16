import Header from '../../components/header/header';

function MainPage(): JSX.Element {
    return (
        <>
            <Header />
            <main className='main-container'>
                <div className='wrapper'>
                    <div className='title-container'>
                        <h1>Место для проверки имени</h1>
                        <div className='main-button-container'>
                            <button className='main-log-in'>Войти</button>
                            <button className='main-contacts'>Контакты</button>
                        </div>
                    </div>
                    <div className='service-container'>
                        <div className='service'>
                            <div className='service-logo'>
                                <img src='./img/logo_react.png' alt='Online-reception' />
                            </div>
                            <h3>Онлайн-проверка</h3>
                            <div className='red-line'></div>
                            <div className='request-field'>
                                <input className='input-field' type='text' placeholder="Введите имя"/>
                                <button className='main-log-in'>Проверить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainPage;
