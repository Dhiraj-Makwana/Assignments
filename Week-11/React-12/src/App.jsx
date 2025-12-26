import './App.css'
import { useState } from "react"
import { RecoilRoot } from "recoil"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Counter count={count} />
      <Increase setCount={setCount} />
      <Decrease setCount={setCount}/>
      <IsEven count={count} />
    </>
  )
}

function IsEven({count}) {
  const bin = count%2 == 0 ? "Even" : "Odd"
  return <h1>{bin}</h1>
}

function Counter({count}) {
  return <div>{count}</div>
}

function Increase({setCount}) {
  function Inc() {
    setCount(c => c + 2)
  }

  return <button onClick={Inc}>Increase</button>
}

function Decrease({setCount}) {
  function Dec() {
    setCount(c => c - 1)
  }

  return <button onClick={Dec}>Decrease</button>
}

export default App
