import React, { createContext, useContext, useState } from 'react'

const CountContext = createContext()

function CountProvider({ children }) {
  const [count, setCount] = useState(0)
  
  return <CountContext.Provider value={{
    count: count,
    setCount: setCount
  }}>
    {children}
  </CountContext.Provider>
}

function App() {
  return (
    <div>
      <CountProvider>
      <Parent />
      </CountProvider>
    </div>
  )
}

function Parent() {
  return <div>
    <Increase />
    <Decrease />
    <Value />
  </div>
}

function Increase() {
  const { setCount } = useContext(CountContext)
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>
}

function Decrease() {
  const { setCount } = useContext(CountContext)
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>
}

function Value() {
  const { count } = useContext(CountContext)
  return <p>Count: {count}</p>
}

export default App
