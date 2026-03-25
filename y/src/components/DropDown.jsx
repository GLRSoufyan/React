import { useState } from 'react'
import './DropDown.css'

import tacosImg from '../assets/tacos.jpg'
import pizzaImg from '../assets/pizza.jpg'
import sushiImg from '../assets/sushi.jpg'

function DropDown({ dropdownOptions }) {
  const [selectedFood, setSelectedFood] = useState('')

  return (
    <div className="dropdown-container">
      <select
        value={selectedFood}
        onChange={(event) => setSelectedFood(event.target.value)}
      >
        <option value="">-- Kies eten --</option>

        {dropdownOptions.map((food, index) => (
          <option key={index} value={food}>
            {food}
          </option>
        ))}
      </select>

      {selectedFood && <h2>Jij koos: {selectedFood}</h2>}

      {selectedFood === 'Tacos' && (
        <img src={tacosImg} alt="Tacos" className="food-image" />
      )}

      {selectedFood === 'Pizza' && (
        <img src={pizzaImg} alt="Pizza" className="food-image" />
      )}

      {selectedFood === 'Sushi' && (
        <img src={sushiImg} alt="Sushi" className="food-image" />
      )}
    </div>
  )
}

export default DropDown