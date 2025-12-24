import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCnt] = useState(0)

  function increase() {
    setCnt((c) => c + 1)
  }

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
