function LoadableWrapper(): JSX.Element {
  return (
    <>
      <div className="response-field">
        <ul className="response-list">
          <li className="response-item">
            <span className="response-item__title">Имя: </span>
            <p className="response-item__text"></p>
          </li>
          <li className="response-item">
            <span className="response-item__title">
              Предполагаемый гендер:{" "}
            </span>
            <p className="response-item__text"></p>
          </li>
          <li className="response-item">
            <span className="response-item__title">Вероятность: </span>
            <p className="response-item__text"></p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LoadableWrapper;
