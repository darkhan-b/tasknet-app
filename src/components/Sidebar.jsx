function Sidebar() {
  return (
    <aside className="w-[220px] h-screen bg-slate-800 text-gray-200 p-4 border-r border-slate-700">
      <h2 className="text-lg font-semibold mb-4 text-white">Меню</h2>

      <ul className="space-y-2">
        <li className="px-2 py-1 rounded cursor-pointer hover:bg-slate-700 hover:text-white transition">
          Все задачи
        </li>
        <li className="px-2 py-1 rounded cursor-pointer hover:bg-slate-700 hover:text-white transition">
          Важное
        </li>
        <li className="px-2 py-1 rounded cursor-pointer hover:bg-slate-700 hover:text-white transition">
          Завершённые
        </li>
        <li className="px-2 py-1 rounded cursor-pointer hover:bg-slate-700 hover:text-white transition">
          Настройки
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
