import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(()=> {
      setCount(count => count + 1);
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default App
