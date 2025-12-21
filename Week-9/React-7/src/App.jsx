import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Link to="/">Allen</Link> | {/* when you navigate through pages using <Link> or <Navigate>,
        Every render fetch just needed HTML each time that's why loading does not happens everytime |
        which is the main feature of SPA(Single Page Application) */}
        <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Landing() {
  return <div>
    Home page
  </div>
}

function Class11Program() {
  return <div>
    Class 11th content is here which you are looking for...
  </div>
}

function Class12Program() {
  return <div>
    Class 12th content is here which you are looking for...
  </div>
}

export default App
