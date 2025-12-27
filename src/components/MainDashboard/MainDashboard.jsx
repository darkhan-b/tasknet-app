import "./MainDashboard.scss";
import { useState } from "react";
import BoardItem from "../BoardItem/BoardItem";

function MainDashboard({ boards, onAddBoard, onRemoveBoard }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    onAddBoard(title, description);
    setTitle("");
    setDescription("");
  };

  const filteredBoards = boards.filter((board) => {
    if (filterStatus === "all") return true;
    return board.status === filterStatus;
  });

  return (
    <main className="dashboard">
      <h2>Добавить урок</h2>

      <form onSubmit={handleSubmit} className="dashboard__form">
        <input
          placeholder="Название урока"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Описание урока"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Добавить</button>
      </form>

      <h2>Список досок</h2>

      <div className="dashboard__filters">
        <button
          className={filterStatus === "all" ? "active" : ""}
          onClick={() => setFilterStatus("all")}
        >
          Все
        </button>
        <button
          className={filterStatus === "active" ? "active" : ""}
          onClick={() => setFilterStatus("active")}
        >
          Активные
        </button>
        <button
          className={filterStatus === "archived" ? "active" : ""}
          onClick={() => setFilterStatus("archived")}
        >
          Архивные
        </button>
      </div>

      {filteredBoards.length === 0 ? (
        <p className="dashboard__empty">Досок пока нет</p>
      ) : (
        <div className="dashboard__grid">
          {filteredBoards.map((board) => (
            <BoardItem
              key={board.id}
              board={board}
              onRemove={onRemoveBoard}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default MainDashboard;
