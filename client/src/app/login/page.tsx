'use client'

import { useState } from "react"
import login_styles from "./login.module.css"
import { socket } from "../../../socket";

export default function Login() {
    const [text, setText] = useState({
        username: "",
        password: "",
    });

    const set_details = (event: { target: {name: string, value: string} }) => {
        const {name, value} = event.target;
        setText(prevState => ({
            ...prevState,
            [name]: value,
        }));
        console.log(text)
    }

    const submit_login = () => {
        if (text["password"].length < 6) {
            console.log("Password needs to be longer")
            return 0;
        }

        socket.emit("login_information", text)
    }

    return (
        <main className={login_styles.body}>
            <div className={login_styles.wrapper}>
                <div className={login_styles.title}><span>OHMS Chat Login</span></div>
                <div id={login_styles.loginspan}>
                    <div className={login_styles.row}>
                        <i className="fas fa-user"></i>
                        <input type="text" id={login_styles.username} name="username" placeholder="Username or Email" required onChange={set_details}/>
                    </div>
                    <div className={login_styles.row}>
                        <i className="fas fa-lock"></i>
                        <input type="password" id={login_styles.password} name="password" placeholder="Password" required onChange={set_details}/>
                    </div>
                    <div className="pass"><a href="#">Forgot password?</a></div>
                    <div id={login_styles.errorMessage} className={login_styles["error-message"]}></div>
                    <div className={login_styles["row button"]}>
                        <input type="submit" value="Login" onClick={() => submit_login()}/>
                    </div>
                    <div className={login_styles["signup-link"]}>Not a member? <a href="#">Sign up now</a></div>
                </div>
            </div>
        </main>
    )
}