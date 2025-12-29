import './App.css'

function App() {

  return (
    <>
      <div className='sm:grid grid-cols-12'>
        <div className='bg-red-300 sm:col-span-6'>Child - 1</div>
        <div className='bg-blue-300 sm:col-span-4'>Child - 2</div>
        <div className='bg-green-300 sm:col-span-2'>Child - 3</div>
      </div>
    </>
  )
}

export default App
