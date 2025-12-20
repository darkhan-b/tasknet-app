function BoardItem({ board, onRemove }) {
  return (
    <div
      className="bg-slate-800 border border-slate-700 rounded-xl p-4
                 flex flex-col hover:border-blue-500 hover:shadow-lg transition"
    >
      <h3 className="text-lg font-semibold mb-2">{board.title}</h3>

      <p className="text-gray-300 flex-1">{board.description}</p>

      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-gray-400">{board.createdAt}</span>

        <button
          onClick={() => onRemove(board.id)}
          className="text-red-400 hover:text-red-300 transition"
        >
          Удалить
        </button>
      </div>
    </div>
  );
}

export default BoardItem;
