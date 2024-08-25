import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import AIChatbot from './pages/AIChatbot';
import RealEstateAPIPage from './pages/RealEstateAPIPage';
import DatabasePage from './pages/DatabasePage';
import MapAPIPage from './pages/MapAPIPage';
import TestProjects from './pages/TestProjects';
import SpotifyPage from './pages/SpotifyPage';
// Import other pagess as needed

const routes = [
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '*', element: <NotFound /> },
  { path: '/aichatbot', element: <AIChatbot />},
  { path: '/realestateapi', element: <RealEstateAPIPage />},
  { path: '/mapapi', element: <MapAPIPage />},
  { path: '/database', element: <DatabasePage />},
  { path: '/testprojects', element: <TestProjects/>},
  { path: '/spotify', element: <SpotifyPage />},
  // Add more routes here as needed
];

export default routes;