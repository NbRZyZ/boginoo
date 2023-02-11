import styles from "../styles/home.module.css";
import logo from "../assests/logo-default.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export function Home() {
  const Navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [resUrl, setResUrl] = useState();
  const [toggle, setToggle] = useState(false);
  const [history, setHistory] = useState();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Nasa", {
        headers: {
          authorization:
            window.localStorage.getItem("token") &&
            JSON.parse(window.localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/link", {}).then((res) => {
      setHistory(res.data);
    });
  }, []);
  console.log(history);

  const Logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    Navigate("/login");
  };

  const AddLink = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/link",
       { full: url,
        author_id: user._id,
      })
      .then((res) => {
        console.log(res.data);
        setResUrl(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className={styles.header}>
        <p className={styles.headerp}>Хэрхэн ажилладаг вэ?</p>

        {user && (
          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{user && user.email}</button>
            <div className={styles.dropdowncontent}>
              <Link onClick={Logout}>Logout</Link>
            </div>
          </div>
        )}

        {!user && (
          <div className={styles.dropdown}>
            <Link to="/login">
              <button className={styles.dropbtn}>Нэвтрэх</button>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} />
        <div className={styles.minicont}>
          <input
            type="text"
            placeholder="  LongUrl"
            className={styles.input}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <button className={styles.shortbutn} onClick={AddLink}>
            {" "}
            Богиносгох
          </button>
        </div>
        {resUrl && (
          <div className={styles.urlContainer}>
            <span className={styles.urlTexts}>Өгөгдсөн холбоос:</span>
            <a href={resUrl.full}>
              {" "}
              {resUrl.full.length > 40 && resUrl.full.slice(0, 40) + "..."}
              {resUrl.full.length < 40 && resUrl.full}
            </a>
            <span className={styles.urlTexts} style={{ marginTop: "40px" }}>
              Богино холбоос:
            </span>
            <a href={`http://localhost:8000/${resUrl.short}`}>
              localhost:8000/{resUrl.short}{" "}
            </a>
          </div>
        )}
        <h2 className={styles.histname} onClick={() => setToggle(!toggle)}>
          Түүх
        </h2>
        {toggle && (
          <div className={styles.bighistorycont}>
            {history &&
              history.map((item, index) => {
                if (item.author_id === user._id) {
                return (
                  <div key={index} className={styles.histcont}>
                    <div className={styles.full}>
                      <span className={styles.urlTexts}>Өгөгдсөн холбоос:</span>
                      <a href={item.full}>
                        {item.full.length > 24 &&
                          item.full.slice(0, 26) + "..."}
                        {item.full.length < 24 && item.full}
                      </a>
                    </div>
                    <div className={styles.short}>
                      <span>Богино холбоос:</span>
                      <a href={`http://localhost:8000/${item.short}`}>
                        localhost:8000/{item.short}{" "}
                      </a>
                    </div>
                    <p
                      className={styles.copy}
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `http://localhost:8000/${item.short}`
                        );
                      }}
                    >
                      Хуулж авах
                    </p>
                  </div>
                );
                  }
              })}
          </div>
        )}
      </div>
    </div>
  );
}
