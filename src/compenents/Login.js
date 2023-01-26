import styles from "../styles/login.module.css";
import logo from "../assests/logo-default.png";
import { Link } from "react-router-dom";
export const Login = () =>{
    return(
        <div>
        <div className={styles.header}>
                <p className={styles.headerp}>Хэрхэн ажилладаг вэ?</p>
        </div>
        <div className={styles.container}>
        <img className={styles.logo} src={logo}/>
        <h1 style={{"color":"#02B589"}}>Нэвтрэх</h1>
            <p className={styles.p}>Цахим хаяг</p>
            <input className={styles.input}></input>
            <p className={styles.p}>Нууц үг</p>
            <input className={styles.input} type="password"></input>
            <div className={styles.minicont}>
                <input type="checkbox"></input >
                <p  className={styles.headerp}>Намайг сана</p>
                <p className={styles.forgot}>Нууц үгээ мартсан</p>
            </div>
           <button className={styles.button}>Нэвтрэх</button>
          <Link to="/signup"><p>Шинэ хэрэглэгч бол энд дарна уу?</p></Link>
        </div>
      </div>
    )
}