import { Link, Outlet } from "react-router-dom"

function TemplateAuth () {
  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/auth">Autenticación</Link>
      <Link to="/auth/faqs">Faqs</Link>
    </nav>
    <Outlet />
    <footer>
      otra cosa. Soy un PIE 2
    </footer>
    </>
    
  )
}

export default TemplateAuth