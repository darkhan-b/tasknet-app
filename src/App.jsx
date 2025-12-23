import { useState } from "react";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";

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
    <div className="app">
      <Sidebar />

      <div className="app__content">
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
