import styles from "./MainDashboard.module.css";

function BoardItem({ board, onRemove }) {
  return (
    <div className={styles.boardCard}>
      <h3>Название: {board.title}</h3>
      <p>Описание: {board.description}</p>

      <div className={styles.cardFooter}>
        <span className={styles.date}>Создано: {board.createdAt}</span>

        <button
          className={styles.deleteButton}
          onClick={() => onRemove(board.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default BoardItem;
