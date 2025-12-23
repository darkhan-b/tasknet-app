import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Меню</h2>

      <ul className="sidebar__list">
        <li className="sidebar__item">Все задачи</li>
        <li className="sidebar__item">Важное</li>
        <li className="sidebar__item">Завершённые</li>
        <li className="sidebar__item">Настройки</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
