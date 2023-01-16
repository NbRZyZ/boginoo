import styles from "../styles/home.module.css" 
import logo from "../assests/logo-default.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export function Home() {

  const [url, setUrl] = useState("");
  const [resUrl, setResUrl] = useState();
  const AddLink = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/links", { full: url })
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
                <Link to="login"><button className={styles.button}>Нэвтрэх</button></Link>
        </div>
        <div className={styles.container}>
          <img className={styles.logo} src={logo}/>
          <div className={styles.minicont}>
            <input type="text" placeholder="  LongUrl" className={styles.input} value={url}
            onChange={(e) => setUrl(e.target.value)}></input>
           <button className={styles.shortbutn} onClick={AddLink}> Богиносгох</button>
          </div>
          {resUrl && (
        <div className={styles.urlContainer}>
          <span className={styles.urlTexts}>Өгөгдсөн холбоос:</span>
          <a href={resUrl.full}>{resUrl.full}</a>
          <span className={styles.urlTexts} style={{ marginTop: "40px" }}>
            Богино холбоос:
          </span>
          <a href={`http://localhost:8000/${resUrl.short}`}>
            localhost:8000/{resUrl.short}{" "}
          </a>
        </div>  
      )}
        </div>
      </div>
    );
  }
  

  