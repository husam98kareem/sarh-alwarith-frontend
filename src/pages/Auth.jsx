import React, { useState } from 'react'
import "./Auth.css"
import bg from "../assets/bg.jpg"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import logo from "../assets/logo1.png"

function Auth() {
    const [showLogin, setShowLogin] = useState(true)
    return (
        <div className="auth_page">
            <div className="container">
                <div className="box1">
                    <img src={bg} alt="bg" />
                    <div className="btn">
                        <div
                            onClick={() => setShowLogin(true)}
                            style={{
                                height: "40px", cursor: "pointer", fontWeight: "700",
                                background: showLogin ? "#8c9091" : "transparent", borderRadius: "10px 0px 0px 10px"
                                , color: showLogin ? "#FFF" : "#40485A"
                            }}>تسجيل الدخول</div>
                        <div
                            onClick={() => setShowLogin(false)}
                            style={{
                                height: "30px", cursor: "pointer",
                                borderRadius: "10px 0px 0px 10px",
                                fontWeight: "700", color: !showLogin ? "#fff" : "#40485A",
                                backgroundColor: !showLogin ? "#8c9091" : "transparent",
                            }}>انشاء حساب</div>
                    </div>
                </div>
                <div className="box2">

                    <img src={logo} alt="" />
                    {showLogin ? <Login /> : <Register setShowLogin={setShowLogin} />}
                </div>
            </div>
        </div>
    )
}

export default Auth