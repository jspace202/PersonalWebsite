import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
// Import other pagess as needed

const routes = [
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '*', element: <NotFound /> },
  // Add more routes here as needed
];

export default routes;