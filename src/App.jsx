import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainDashboard from "./components/MainDashboard";

function App() {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Математика",
      description: "Наука логики и структур",
      createdAt: "2025-03-13",
    },
    {
      id: 2,
      title: "Физика",
      description: "Наука об явлениях и законах природы",
      createdAt: "2025-03-12",
    },
    {
      id: 3,
      title: "Химия",
      description: "Наука о веществах",
      createdAt: "2025-03-14",
    },
    {
      id: 4,
      title: "География",
      description: "Наука о Земле",
      createdAt: "2025-03-15",
    },
  ]);

  const addBoard = (title, description) => {
    setBoards((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        description,
        createdAt: new Date().toISOString().slice(0, 10),
      },
    ]);
  };

  const removeBoard = (id) => {
    setBoards((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <MainDashboard
          boards={boards}
          onAddBoard={addBoard}
          onRemoveBoard={removeBoard}
        />
      </div>
    </div>
  );
}

export default App;
