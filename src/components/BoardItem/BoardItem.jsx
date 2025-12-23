import "./BoardItem.scss";

function BoardItem({ board, onRemove }) {
  return (
    <div className="board-item">
      <h3 className="board-item__title">{board.title}</h3>

      <p className="board-item__description">{board.description}</p>

      <div className="board-item__footer">
        <span className="board-item__date">{board.createdAt}</span>

        <button
          className="board-item__remove"
          onClick={() => onRemove(board.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default BoardItem;
