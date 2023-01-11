import styles from "../styles/home.module.css" 
import logo from "../assests/logo-default.png"
import { Link } from "react-router-dom";
export function Home() {
    return (
      <div>
        <div className={styles.header}>
                <p className={styles.headerp}>Хэрхэн ажилладаг вэ?</p>
                <Link to="login"><button className={styles.button}>Нэвтрэх</button></Link>
        </div>
        <div className={styles.container}>
        <img className={styles.logo} src={logo}/>
          <div className={styles.minicont}>
            <input type="text" placeholder="  LongUrl" className={styles.input}></input>
           <button className={styles.shortbutn}>Богиносгох</button>
          </div>
        </div>
      </div>
    );
  }
  

  