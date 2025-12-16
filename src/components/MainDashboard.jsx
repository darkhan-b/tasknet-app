import { useState } from "react";
import styles from "./MainDashboard.module.css";
import UserForm from "./UserForm";
import BoardItem from "./BoardItem";

function MainDashboard({ boards, onAddBoard, onRemoveBoard }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) return;

    onAddBoard(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <main className={styles.container}>
      <h2>Добавить урок</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Название урока"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={styles.textarea}
          placeholder="Описание урока"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className={styles.addButton}>
          ➕ Добавить
        </button>
      </form>

      <h2>Список досок</h2>

      {boards.length === 0 ? (
        <p className={styles.emptyText}>Досок пока нет</p>
      ) : (
        <div className={styles.boardList}>
          {boards.map((board) => (
            <BoardItem key={board.id} board={board} onRemove={onRemoveBoard} />
          ))}
        </div>
      )}

      {/* <UserForm /> */}
    </main>
  );
}

export default MainDashboard;
