import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />} /> {/* When user trying to access random route */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout() {
  return <div style={{height: "100vh"}}>
    <Link to="/">Allen</Link> | {/* when you navigate through pages using <Link> or <Navigate>,
    Every render fetch just needed HTML each time that's why loading does not happens everytime |
    which is the main feature of SPA(Single Page Application) */}
    <Link to="/neet/online-coaching-class-11">Class 11</Link> | 
    <Link to="/neet/online-coaching-class-12">Class 12</Link>

    <div style={{height: "90vh"}}>
      <Outlet />
    </div>

    Footer
  </div>
}

function ErrorPage() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/")
  }
  return <div>
    Page not Found
    <button onClick={redirectUser} >Home</button>
  </div>
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
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/")
  }
  return <div>
    Class 12th content is here which you are looking for...
    <button onClick={redirectUser} >Go Back to Landing Page</button>
  </div>
}

export default App
