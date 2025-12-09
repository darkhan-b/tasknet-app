import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainDashboard from "./components/MainDashboard";

function App() {
  const itemList = [
    { id: 1, title: "Яблоко", buyed: false },
    { id: 2, title: "Банан", buyed: true },
    { id: 3, title: "Творог", buyed: false },
    { id: 4, title: "Курица", buyed: true },
    { id: 5, title: "Соль", buyed: false },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <MainDashboard tasks={itemList} />
      </div>
    </div>
  );
}

export default App;
