import styles from "../styles/Signup.module.css";
import logo from "../assests/logo-default.png";
export const Signup = () =>{
    return(
        <div>
        <div className={styles.header}>
                <p className={styles.headerp}>Хэрхэн ажилладаг вэ?</p>
        </div>
        <div className={styles.container}>
        <img className={styles.logo} src={logo}/>
            <p className={styles.p}>Цахим хаяг</p>
            <input className={styles.input}></input>
            <p className={styles.p}>Нууц үг</p>
            <input className={styles.input} type="password"></input>
            <p className={styles.p}>Нууц үг давтана уу?</p>
            <input className={styles.input} type="password"></input>
            <br></br>
            <button className={styles.button}>Бүртгүүлэх</button>
        </div>
      </div>
    )
}