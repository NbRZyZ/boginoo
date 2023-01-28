import styles from "../styles/Signup.module.css";
import logo from "../assests/logo-default.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export const Signup = () =>{

  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    if (password !== confirmPass) {
      console.log("Passwords do not match");
      return;
    }
    axios
      .post("http://localhost:8000/signup", {
        email,
        password 
      })
      .then((res) => {
        console.log(res.data);
        Navigate("/login");
      })
      .catch((error) => {
        console.log("Invalid email or password");
        console.log(error.message);
      });
  };

    return(
        <div>
        <div className={styles.header}>
                <p className={styles.headerp}>Хэрхэн ажилладаг вэ?</p>
        </div>
        <div className={styles.container}>
        <img className={styles.logo} src={logo}/>
        <h1 style={{"color":"#02B589"}}>Бүртгүүлэх</h1>
            <p className={styles.p}>Цахим хаяг</p>
            <input className={styles.input} onChange={(e) => setEmail(e.target.value)}></input>
            <p className={styles.p}>Нууц үг</p>
            <input className={styles.input} type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <p className={styles.p}>Нууц үг давтана уу?</p>
            <input className={styles.input} type="password" onChange={(e) => setConfirmPass(e.target.value)}></input>
            <br></br>
           <button className={styles.button}  onClick={onSubmit}>Бүртгүүлэх</button>
        </div>
      </div>
    )
}