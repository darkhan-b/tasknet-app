function Header() {
  return (
    <header className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">TaskNest</h1>
        <p className="text-sm text-gray-300">Центр управления задачами</p>
      </div>

      <nav className="flex gap-4">
        <button className="text-gray-300 hover:text-white transition">
          Главная
        </button>
        <button className="text-gray-300 hover:text-white transition">
          Доски
        </button>
        <button className="text-gray-300 hover:text-white transition">
          Таски
        </button>
        <button className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 transition">
          Войти
        </button>
      </nav>
    </header>
  );
}

export default Header;
