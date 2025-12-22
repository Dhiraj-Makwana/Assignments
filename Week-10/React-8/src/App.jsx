import { useState } from 'react'

function App() {
  const [bulbOn, setBulbOn] = useState(false); //prop drilling

  return (
    <div>
      <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  )
}

function LightBulb({ bulbOn, setBulbOn }) {
  return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
  </div>
}

function BulbState({bulbOn}) {
  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState({bulbOn, setBulbOn}) {
  function Toggle() {
    //setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={Toggle}>Toggle Bulb</button>
  </div>
}

export default App
