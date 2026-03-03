import { Link, Outlet } from "react-router-dom"

function Template () {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/auth">Auth</Link>
    </nav>
    <Outlet />
    <footer>
      otra cosa. Soy un PIE
    </footer>
    </>
    
  )
}

export default Template