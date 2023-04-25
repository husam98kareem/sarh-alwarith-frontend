import React, { useState } from 'react'
import axios from "axios"

function Hospitality() {
  const [selectedOption, setSelectedOption] = useState('');
  const [number, setNumber] = useState("")
  const [place, setPlace] = useState("")

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/api/orders/", { selectedOption, number, place })
  }

  return (
    <div className="hospitality">
      <div className="hospitality__form">
        {/* <label> what drink? */}
          <select className="select" id="select" value={selectedOption} onChange={handleSelectChange}>
            <option value="tea">tea</option>
            <option value="coffee">coffee</option>
            <option value="meat">Meat</option>
          </select>
          <p>You selected: {selectedOption}</p>
        {/* </label> */}
        <input onChange={(e) => setNumber(e.target.value)} type="number " placeholder='العدد' />
        <input onChange={(e) => setPlace(e.target.value)} type="text" placeholder='المكان' />
        <button onClick={handleSubmit}>اطلب</button>
      </div>
    </div>
  )
}

export default Hospitality