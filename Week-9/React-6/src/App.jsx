function App() {

  return (
    <div>
      {[
        <Todo key={1} todo={"Go to gym"} done={false} />,
        <Todo key={2} todo={"Have a breakfast"} done={true}/>
      ]}

      <MyComponent/>
    </div>
  )
}

function Todo({ todo, done }) {
  return <div>
    {todo} - {done ? "Done" : "Not Done"}
  </div>
}

function MyComponent() {
  return <div style={{background: "navy", color: "white", padding: 10, borderRadius: 13}}>
    Hello World
  </div>
}

export default App
