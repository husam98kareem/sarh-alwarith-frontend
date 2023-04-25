import React, { useState } from 'react'
import axios from "axios"
import "./style.css"
import { Triangle } from 'react-loader-spinner'

import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const login = () => {
        setLoading(true)
        axios.post("http://localhost:4000/api/auth/login", { username, password }).then((response) => {
            // console.log(response.data)
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data));
                const user = JSON.parse(localStorage.getItem('user'));
                if (user) {
                    setLoading(false)
                    navigate("/home")
                }
            }
        });

    }
    return (
        <div className="login" dir="rtl">
            <h3>تسجيل الدخول</h3>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="اسم المستخدم" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='كلمة المرور' />
            {loading ? <Triangle
                height="60"
                width="60"
                color="#fff"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            /> : <button onClick={login}>تسجيل الدخول</button>}

        </div>
    )
}

export default Login