import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import AIChatbot from './pages/AIChatbot';
import RealEstateAPI from './pages/RealEstateAPI';
import HUD from './pages/HUD';
import MapAPI from './pages/MapAPI';
// Import other pagess as needed

const routes = [
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '*', element: <NotFound /> },
  { path: '/aichatbot', element: <AIChatbot />},
  { path: '/realestateapi', element: <RealEstateAPI />},
  { path: '/mapapi', element: <MapAPI />},
  { path: '/hud', element: <HUD />},
  // Add more routes here as needed
];

export default routes;