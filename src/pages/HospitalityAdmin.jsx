import React, { useState, useEffect } from 'react'
import "./Hospitality.css"
import axios from "axios"
function HospitalityAdmin() {


    const [orders, setOrders] = useState([
        {
            "id": 1,
            "tittle": "tea",
            "number": "2",
            "place": "it room",
            "user_id": 1
        },
        {
            "id": 2,
            "tittle": "tea",
            "number": "3",
            "place": "it room",
            "user_id": 2
        }
    ])

    //   const getOrders=()=> axios.get("http://localhost:4000/api/orders/").then((response) => {
    //       setOrders(response.data)
    //         })

    useEffect(() => {
        // getOrders ()
        console.log("hhhhiii")
    }, [])

    return (
        <div className='hospitality'>
            <div >
                {orders?.map((order) => (
                    <div key={order.id} className="card">
                        <div className='info__'>
                            <h5>{order.tittle}</h5>
                            <h5>عدد  {order.number}</h5>
                        </div>
                        <h4>{order.place}</h4>
                        <h4>nama mamenm ame</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HospitalityAdmin