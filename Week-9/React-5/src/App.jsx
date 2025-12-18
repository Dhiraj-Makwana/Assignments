function App() {

  return  (
  <div style={{display: "flex", background: "#cac8c8ff"}}>
    <Card>
      <div style={{color: "red"}}>
        <p>Write about your post</p>
        <input placeholder="What's in your mind..." type="text"></input>
      </div>
    </Card>
    <Card>
      <div>Hi there</div>
    </Card>
  </div>
  )
}

function Card({ children }) {
  return <div style={{background: "white", color: "black", padding: 10, margin: 13, borderRadius: 10}}>
    {children}
  </div>
}

export default App
