import { useState } from 'react'
import './App.css'

const App = () => {
  const [temperature, setTemperature] = useState(0)

  var value = 1

  const handleChange = (event) => {
    setTemperature(event.target.value);
    value = 2
  };

  const showTemperature = () => {
    
  }

  return (
    <div className='app'>
      <div className='container'>
        <h3>Enter tempeature</h3>
        <div className='conversionInput'>
          <p>Degree (celsius)</p>
          <input 
          type='number'
          id="temperature"
          onChange={handleChange}
          >
          </input>
        </div>
        <div>
          <button onClick={showTemperature}>Convert → </button>
        </div>
      </div>
      <div className='results'>
        <div className='temperaturevalue'>
          Farenheit: {temperature * 1.8 + 32}
        </div>
      </div>
    </div>
  )
}

export default App