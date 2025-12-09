import styles from "./MainDashboard.module.css";

function MainDashboard({ tasks }) {
  return (
    <main className={styles.container}>
      <h2>Главная панель</h2>
      <p>Ниже отображается список продуктов через props:</p>

      <ol className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            {task.title} — {task.buyed ? "Куплен" : "Не куплено"}
          </li>
        ))}
      </ol>

      {/* <div className={styles.card}> 
        <h3>Пример блока</h3>
        <p>Это просто заглушка, чтобы увидеть структуру страницы.</p> // Пока лишнее
      </div> */}
    </main>
  );
}

export default MainDashboard;
