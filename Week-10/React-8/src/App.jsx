import { useState, createContext, useContext } from 'react'

const BulbContext = createContext();  //create context

function App() {
  const [bulbOn, setBulbOn] = useState(false); //prop drilling(problem: complexity, maintanance) => Context API(solution)

  return (
    <div>
      <BulbContext.Provider value={{ //context Provider
        bulb: bulbOn,
        setBulbOn: setBulbOn
      }}>
      <LightBulb />
      </BulbContext.Provider>
    </div>
  )
}

function LightBulb() {
  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState() {
  const { bulb } = useContext(BulbContext) //use the provided context
  return <div>
    {bulb ? "Bulb on" : "Bulb off"}
  </div>
}

function ToggleBulbState() {
  const { bulb } = useContext(BulbContext)
  const { setBulbOn } = useContext(BulbContext)

  function Toggle() {
    //setBulbOn(currentState => !currentState)
    setBulbOn(!bulb)
  }

  return <div>
    <button onClick={Toggle}>Toggle Bulb</button>
  </div>
}

export default App
