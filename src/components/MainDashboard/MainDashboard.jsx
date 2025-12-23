import "./MainDashboard.scss";
import { useState } from "react";
import BoardItem from "../BoardItem/BoardItem";

function MainDashboard({ boards, onAddBoard, onRemoveBoard }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    onAddBoard(title, description);
    setTitle("");
    setDescription("");
  };

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

      {boards.length === 0 ? (
        <p className="dashboard__empty">Досок пока нет</p>
      ) : (
        <div className="dashboard__grid">
          {boards.map((board) => (
            <BoardItem key={board.id} board={board} onRemove={onRemoveBoard} />
          ))}
        </div>
      )}
    </main>
  );
}

export default MainDashboard;
