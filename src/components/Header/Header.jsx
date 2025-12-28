import "./Header.scss";

function Header({ onMenuClick }) {
  return (
    <header className="header">
      <div className="header__left">
        <button className="header__burger" onClick={onMenuClick}>
          ☰
        </button>

        <div className="header__info">
          <h1 className="header__title">TaskNest</h1>
          <p className="header__subtitle">Центр управления задачами</p>
        </div>
      </div>

      <nav className="header__nav">
        <button>Главная</button>
        {/* <button>Доски</button>
        <button>Таски</button> */}
        <button className="primary">Войти</button>
      </nav>
    </header>
  );
}

export default Header;
