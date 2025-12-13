import { useState } from "react";
import styles from "./UserForm.module.css";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("Kazakhstan");
  const [city, setCity] = useState("");

  return (
    <div className={styles.form}>
      <h3 className={styles.title}>
        Форма пользователя (заполни, чтобы увидеть информацию)
      </h3>

      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className={styles.input}
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <input
          className={styles.input}
          type="text"
          placeholder="Город"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <select
        className={styles.select}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="Kazakhstan">Kazakhstan</option>
        <option value="USA">USA</option>
        <option value="Germany">Germany</option>
        <option value="Japan">Japan</option>
      </select>

      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            value="Муж"
            checked={gender === "Муж"}
            onChange={(e) => setGender(e.target.value)}
          />
          Муж
        </label>

        <label>
          <input
            type="radio"
            value="Жен"
            checked={gender === "Жен"}
            onChange={(e) => setGender(e.target.value)}
          />
          Жен
        </label>
      </div>
      <div className={styles.output}>
        <p>
          <strong>Имя:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Дата рождения:</strong> {birthDate}
        </p>
        <p>
          <strong>Пол:</strong> {gender}
        </p>
        <p>
          <strong>Страна:</strong> {country}
        </p>
        <p>
          <strong>Город:</strong> {city}
        </p>
      </div>
    </div>
  );
}

export default UserForm;
