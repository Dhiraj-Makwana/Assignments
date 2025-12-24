import { useState } from 'react'
import './App.css'

//custom hook
function useCounter() {
  const [count, setCnt] = useState(0)

  function increase() {
    setCnt((c) => c + 1)
  }

  return {
    count: count,
    increase: increase
  }
}

function App() {
  const {count, increase} = useCounter()

  return (
    <>        
      <div className="card">
        <button onClick={increase}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
