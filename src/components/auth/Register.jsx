import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify'
function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const register = () => {
        setLoading(true)
        axios.post("http://localhost:4000/api/auth/register", { name, username, password }).then((response) => {
            console.log(response.data)
            localStorage.setItem("user", JSON.stringify(response.data));
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                toast("doooooooone")
                setLoading(false)
                navigate("/home")
            }
        })
    }

    return (
        <div className="login" dir="rtl">
            <ToastContainer />
            <h3>انشاء حساب</h3>
            <input type="text" placeholder='الاسم' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="اسم المستخدم" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="كلمة المرور" onChange={(e) => setPassword(e.target.value)} />
            {loading ? <Triangle
                height="60"
                width="60"
                color="#fff"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            /> : <button onClick={register}>انشاء حساب</button>}

        </div>
    )
}

export default Register