import { useState, createContext, useContext } from 'react'

const BulbContext = createContext();  //create context

//BulbProvider is a BlackBox component(own wrapper) to hide what happend under the hood like abstraction
function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(false); //prop drilling(problem: complexity, maintanance) => Context API(solution)

  return <BulbContext.Provider value={{ //context Provider
      bulb: bulbOn,
      setBulbOn: setBulbOn
    }}>
      { children }
  </BulbContext.Provider>      
}

function App() {

  return (
    <div>
      <BulbProvider>
      <LightBulb />
      </BulbProvider>
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
  const { bulb, setBulbOn } = useContext(BulbContext)

  function Toggle() {
    //setBulbOn(currentState => !currentState)
    setBulbOn(!bulb)
  }

  return <div>
    <button onClick={Toggle}>Toggle Bulb</button>
  </div>
}

export default App
