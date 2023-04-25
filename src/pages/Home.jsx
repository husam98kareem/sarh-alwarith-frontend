import React from 'react'
import "./Home.css"
import { GiCoffeeCup } from "react-icons/gi"
import { FaUserTie } from "react-icons/fa"
import { Link } from "react-router-dom"
function Home() {
    return (
        <div className='home__page'>
            <Link style={{ textDecoration: "none", color: "aliceblue", height: "180px" }} to="/human-resource">
                <div className="dept">
                    <h3><FaUserTie style={{ fontSize: "30px", marginRight: "10px" }} /></h3>
                    <h3>المواردالبشرية</h3>
                </div>
            </Link>
            <Link style={{ textDecoration: "none", color: "aliceblue", height: "180px" }} to="/hospitality">
                <div className="dept">
                    <h3><GiCoffeeCup style={{
                        fontSize: "30px",
                        marginRight: "10px"
                    }} /></h3>
                    <h3>الضيافة</h3>
                </div>
            </Link>
        </div>
    )
}

export default Home