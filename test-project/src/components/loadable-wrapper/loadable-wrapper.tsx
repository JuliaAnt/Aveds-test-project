import { Result } from "../../types/result";

type LoadableWrapperProps = {
  genderData: Result;
};

function LoadableWrapper({ genderData }: LoadableWrapperProps): JSX.Element {
  const { name, gender, probability } = genderData;
  return (
    <>
      {gender === null ? (
        <span className="response-item__title">Такого имени нет в базе данных</span>
      ) : (
        <div className="response-field">
          <ul className="response-list">
            <li className="response-item">
              <span className="response-item__title">Имя: </span>
              <span className="response-item__text">{name}</span>
            </li>
            <li className="response-item">
              <span className="response-item__title">
                Предполагаемый гендер:{" "}
              </span>
              <span className="response-item__text">{gender}</span>
            </li>
            <li className="response-item">
              <span className="response-item__title">Вероятность: </span>
              <span className="response-item__text">{`${
                probability * 100
              }%`}</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default LoadableWrapper;
