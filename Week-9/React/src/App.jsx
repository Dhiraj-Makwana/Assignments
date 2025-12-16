import React, { useState } from 'react';
import Notification from "./NotificationCount";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <br/>
      <br/>

      <Notification />
    </>
  )
}

export default App
