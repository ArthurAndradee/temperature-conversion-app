import { useState } from 'react'
import './App.css'

function App() {
  const [temperature, setTemperature] = useState(0)

  return (
    <div className='app'>
      <div className='container'>
        <h3>Enter tempeature</h3>
        <div className='conversionInput'>
          <p>Degree</p>
          <input type='number'></input>
        </div>
        <div>
          <button>Convert → </button>
        </div>
      </div>
      <div className='results'>
        <div className='temperaturevalue'>
          37
        </div>
      </div>
    </div>
  )
}

export default App
