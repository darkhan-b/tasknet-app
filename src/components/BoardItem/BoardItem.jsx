import "./BoardItem.scss";

function BoardItem({ board, onRemove }) {
  return (
    <div className={`board-item board-item--${board.status}`}>
      <h3 className="board-item__title">{board.title}</h3>

      <p className="board-item__description">{board.description}</p>

      <div className="board-item__footer">
        <span className="board-item__status">
          Статус: {board.status === "active" ? "Активная" : "Архивная"}
        </span>

        <span className="board-item__date">{board.createdAt}</span>
      </div>

      <button className="board-item__remove" onClick={() => onRemove(board.id)}>
        Удалить
      </button>
    </div>
  );
}

export default BoardItem;
