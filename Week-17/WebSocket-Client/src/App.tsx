import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  
  function sendMessage() {
    if(!socket) {
      return
    }
    const message = inputRef.current?.value 
    if(message) {
      socket.send(message)
    }
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")

    ws.onopen = () => {
      setSocket(ws)
    }

    ws.onmessage = (ev) => {
      alert(ev.data)
    }
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='write ping' />
      <button onClick={sendMessage} type="button">Send</button>
    </div>
  )
}

export default App
