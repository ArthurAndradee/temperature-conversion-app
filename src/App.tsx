import { useState } from 'react'
import './App.css'

const App = () => {
  const [temperature, setTemperature] = useState(0)

  const handleChange = (event) => {
    setTemperature(event.target.value);
  };

  return (
    <div className='app'>
      <div className='container'>
        <h3>Enter tempeature</h3>
        <div className='conversionInput'>
          <p>Degree °C</p>
          <input 
          type='number'
          id="temperature"
          onChange={handleChange}
          >
          </input>
        </div>
        <div>
          <button>Automatically converted! </button>
        </div>
      </div>
      <div className='results'>
        <div className='temperaturevalue'>
         {temperature * 1.8 + 32} °F
        </div>
        <div className='temperaturevalue'>
          {temperature - 273.5} °K
        </div>
      </div>
    </div>
  )
}

export default App