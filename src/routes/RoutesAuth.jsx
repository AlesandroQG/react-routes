import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Template from "../pages/Template";
import TemplateAuth from "../pages/TemplateAuth";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Auth from "../pages/Auth";
import Faqs from "../pages/Faqs";

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <Template />,
    children: [
      {path: '/', element: <Home />},
      {path: '/projects', element: <Projects />},
      {path: '/resume', element: <Resume />}
    ]
  },
  {
    path: '/auth',
    element: <TemplateAuth />,
    children: [
      {path: '/auth', element: <Auth />},
      {path: 'faqs', element: <Faqs />},
    ]
  }
]
)

export default router
