import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Project from "./sections/Project"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
  )
}

export default App
