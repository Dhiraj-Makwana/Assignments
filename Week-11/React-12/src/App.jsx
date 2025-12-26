import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom } from "./atoms/counter"

function App() {

  return (
    <RecoilRoot>
      <Counter />
      <Increase />
      <Decrease />
      <IsEven />
    </RecoilRoot>
  )
}

function IsEven() {
  const count = useRecoilValue(countAtom)
  const bin = count%2 == 0 ? "Even" : "Odd"

  return <h1>{bin}</h1>
}

function Counter() {
  const count = useRecoilValue(countAtom)

  return <div>{count}</div>
}

function Increase() {
  const setCount = useSetRecoilState(countAtom)

  function Inc() {
    setCount(c => c + 2)
  }

  return <button onClick={Inc}>Increase</button>
}

function Decrease() {
  const setCount = useSetRecoilState(countAtom)

  function Dec() {
    setCount(c => c - 1)
  }

  return <button onClick={Dec}>Decrease</button>
}

export default App
