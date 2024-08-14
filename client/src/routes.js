import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import AIChatbot from './pages/AIChatbot';
import RealEstateAPIPage from './pages/RealEstateAPIPage';
import HUDPage from './pages/HUDPage';
import MapAPIPage from './pages/MapAPIPage';
// Import other pagess as needed

const routes = [
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '*', element: <NotFound /> },
  { path: '/aichatbot', element: <AIChatbot />},
  { path: '/realestateapi', element: <RealEstateAPIPage />},
  { path: '/mapapi', element: <MapAPIPage />},
  { path: '/hud', element: <HUDPage />},
  // Add more routes here as needed
];

export default routes;