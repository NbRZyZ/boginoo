import styles from "../styles/Signup.module.css";
import logo from "../assests/logo-default.png";
import { Link } from "react-router-dom";
export const Signup = () =>{
    return(
        <div>
        <div className={styles.header}>
                <p className={styles.headerp}>Хэрхэн ажилладаг вэ?</p>
        </div>
        <div className={styles.container}>
        <img className={styles.logo} src={logo}/>
        <h1 style={{"color":"#02B589"}}>Бүртгүүлэх</h1>
            <p className={styles.p}>Цахим хаяг</p>
            <input className={styles.input}></input>
            <p className={styles.p}>Нууц үг</p>
            <input className={styles.input} type="password"></input>
            <p className={styles.p}>Нууц үг давтана уу?</p>
            <input className={styles.input} type="password"></input>
            <br></br>
           <Link to="/login"><button className={styles.button}>Бүртгүүлэх</button></Link>
        </div>
      </div>
    )
}