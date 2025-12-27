import "./Sidebar.scss";

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <button className="sidebar__close" onClick={onClose}>
          ✕
        </button>

        <h2 className="sidebar__title">Меню</h2>

        <ul className="sidebar__list">
          <li className="sidebar__item">Все задачи</li>
          <li className="sidebar__item">Важное</li>
          <li className="sidebar__item">Завершённые</li>
          <li className="sidebar__item">Настройки</li>
        </ul>
      </aside>

      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  );
}

export default Sidebar;
