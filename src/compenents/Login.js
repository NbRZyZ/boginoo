import styles from "../styles/login.module.css";
import logo from "../assests/logo-default.png";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export const Login = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const TB = () => {
    axios
      .get("http://localhost:8000/tb", {
        headers: {
          authorization:
            window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.get("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  };

  useEffect(() => {
    TB();
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/login", {
        email,
        password,
      })
      .then((res) => {
        TB();
        window.localStorage.setItem("token", JSON.stringify(res.data));
        if (user) return Navigate("/");
        // console.log(res.data);
      })
      .catch((error) => {
        console.log("Invalid email or password");
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.headerp}>Хэрхэн ажилладаг вэ?</p>
      </div>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} />
        <h1 style={{ color: "#02B589" }}>Нэвтрэх</h1>
        <p className={styles.p}>Цахим хаяг</p>
        <input
          className={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className={styles.p}>Нууц үг</p>
        <input
          className={styles.input}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className={styles.minicont}>
          <input type="checkbox"></input>
          <p className={styles.headerp}>Намайг сана</p>
          <p className={styles.forgot}>Нууц үгээ мартсан</p>
        </div>
        <button className={styles.button} onClick={onSubmit}>
          Нэвтрэх
        </button>
        <Link to="/signup">
          <p>Шинэ хэрэглэгч бол энд дарна уу?</p>
        </Link>
      </div>
    </div>
  );
};
