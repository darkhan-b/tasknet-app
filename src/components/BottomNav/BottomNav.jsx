import { Home, LayoutGrid, CheckSquare, User } from "lucide-react";
import "./BottomNav.scss";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <button className="bottom-nav__item active">
        <Home size={22} />
        <span>Главная</span>
      </button>

      <button className="bottom-nav__item">
        <LayoutGrid size={22} />
        <span>Доски</span>
      </button>

      <button className="bottom-nav__item">
        <CheckSquare size={22} />
        <span>Таски</span>
      </button>

      <button className="bottom-nav__item">
        <User size={22} />
        <span>Войти</span>
      </button>
    </nav>
  );
}

export default BottomNav;
