import { useEffect, useState } from 'react'

function App() {
  const [tab, setTab] = useState(1)
  const [tabData, setTabData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(function() {
    fetch("https://jsonplaceholder.typicode.com/todos/" + tab)
    .then(async res => {
      const json = await res.json();
      setTabData(json);
      setLoading(false);
    })
  }, [tab])

  function switchTab(newTab) {
    setTab(newTab);
    setLoading(true);
  }

  return (
    <div>
    <button onClick={()=> switchTab(1)} style={{color: tab == 1 ? "red" : "black"}}>Todo #1</button>
    <button onClick={()=> switchTab(2)} style={{color: tab == 2 ? "red" : "black"}}>Todo #2</button>
    <button onClick={()=> switchTab(3)} style={{color: tab == 3 ? "red" : "black"}}>Todo #3</button>
    <button onClick={()=> switchTab(4)} style={{color: tab == 4 ? "red" : "black"}}>Todo #4</button>
    <br/>
    {loading ? "Loading..." : tabData.title}
    </div>
  )
}

export default App
