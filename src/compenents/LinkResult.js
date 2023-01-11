import styles from "../styles/LinkResult.module.css"
import {useState} from "react"

export const LinkResult =() =>{
    const [shortlink , setShortlink] =useState();
    return(
        <div className={styles.result}>
            <p>{shortlink}</p>
            <button>хуулж авах</button>
        </div>
    )
}