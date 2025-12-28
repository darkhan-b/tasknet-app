import { useState, useEffect } from "react";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import BottomNav from "./components/BottomNav/BottomNav";
import "./App.scss";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Математика",
      description: "Наука логики и структур",
      status: "active",
      createdAt: "2025-12-13",
    },
    {
      id: 2,
      title: "Физика",
      description: "Наука об явлениях и законах природы",
      status: "active",
      createdAt: "2025-12-12",
    },
    {
      id: 3,
      title: "Химия",
      description: "Наука о веществах",
      status: "archived",
      createdAt: "2025-12-14",
    },
    {
      id: 4,
      title: "География",
      description: "изучающая поверхность Земли",
      status: "active",
      createdAt: "2025-12-14",
    },
    {
      id: 5,
      title: "Казахский язык",
      description: "Гуманитарный предмет",
      status: "archived",
      createdAt: "2025-12-17",
    },
    {
      id: 6,
      title: "История Казахстана",
      description: "Наука о прошлом человечества",
      status: "archived",
      createdAt: "2025-12-17",
    },
    {
      id: 7,
      title: "Черчение",
      description: "правила выполнения и чтения графических изображений",
      status: "active",
      createdAt: "2025-12-20",
    },

  ]);

  const addBoard = (title, description) => {
    setBoards((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        description,
        status: "active",
        createdAt: new Date().toISOString().slice(0, 10),
      },
    ]);
  };

  const removeBoard = (id) => {
    setBoards((prev) => prev.filter((b) => b.id !== id));
  };

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  return (
    <div className={`app ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="app__content">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        <MainDashboard
          boards={boards}
          onAddBoard={addBoard}
          onRemoveBoard={removeBoard}
        />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
