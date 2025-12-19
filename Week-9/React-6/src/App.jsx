function App() {

  return (
    <div>
      {[
        <Todo key={1} todo={"Go to gym"} done={false} />,
        <Todo key={2} todo={"Have a breakfast"} done={true}/>
      ]}
    </div>
  )
}

function Todo({ todo, done }) {
  return <div>
    {todo} - {done ? "Done" : "Not Done"}
  </div>
}

export default App
