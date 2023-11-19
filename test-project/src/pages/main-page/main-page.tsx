import { KeyboardEvent, useState } from "react";
import Header from "../../components/header/header";
import LoadableWrapper from "../../components/loadable-wrapper/loadable-wrapper";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchGenderDataAction } from "../../store/api-actions";
import { getGenderData } from "../../store/gender-data-selector";

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const genderData = useAppSelector(getGenderData);
  const [enteredName, setName] = useState<string>("");

  const onChangeName = (name: string) => {
    setName(name);
  };

  const onSubmit = () => {
    if (enteredName) {
      dispatch(fetchGenderDataAction(enteredName));
    }
  };

  const onKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      onSubmit();
    }
  };

  return (
    <>
      <Header />
      <main className="main-container">
        <div className="wrapper">
          <div className="title-container">
            <h1>Узнай гендер по имени</h1>
            <div className="main-button-container">
              <button className="main-log-in">Войти</button>
              <button className="main-contacts">Контакты</button>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="service-logo">
                <img src="./img/logo_react.png" alt="Online-reception" />
              </div>
              <h3>Онлайн-проверка</h3>
              <div className="red-line"></div>
              <div className="request-field">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Введите имя"
                  value={enteredName}
                  onChange={(evt) => onChangeName(evt.target.value)}
                  onKeyDown={onKeyDown}
                />
                <button className="main-log-in" onClick={onSubmit}>
                  Узнать
                </button>
              </div>
              {genderData ? <LoadableWrapper genderData={genderData} /> : ""}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
