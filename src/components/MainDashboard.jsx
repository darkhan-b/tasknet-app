import styles from "./MainDashboard.module.css";
import UserForm from "./UserForm";

function MainDashboard() {
  return (
    <main className={styles.container}>
      {/* <p>Ниже отображается список продуктов через props:</p>

      <ol className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            {task.title} — {task.buyed ? "Куплен" : "Не куплено"}
          </li>
        ))}
      </ol>

      <hr /> */}

      <UserForm />
    </main>
  );
}

export default MainDashboard;
