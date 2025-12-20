import { useState } from "react";
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
    <main className="p-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Добавить урок</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-md mb-8"
      >
        <input
          className="px-3 py-2 rounded bg-slate-700 border border-slate-600
                     focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Название урока"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="px-3 py-2 rounded bg-slate-700 border border-slate-600
                     focus:outline-none focus:border-blue-500"
          placeholder="Описание урока"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 transition rounded py-2"
        >
          Добавить
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Список досок</h2>

      {boards.length === 0 ? (
        <p className="text-gray-400">Досок пока нет</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {boards.map((board) => (
            <BoardItem key={board.id} board={board} onRemove={onRemoveBoard} />
          ))}
        </div>
      )}
    </main>
  );
}

export default MainDashboard;
