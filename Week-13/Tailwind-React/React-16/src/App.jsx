import './App.css'

function App() {

  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-4 bg-red-300'>Child - 1</div>
        <div className='bg-blue-300 col-span-6'>Child - 2</div>
        <div className='bg-green-300 col-span-2'>Child - 3</div>
      </div>
    </>
  )
}

export default App
