import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/HomePages/Home';
import Contact from '../Pages/ContactPages/Contact';
import News from '../Pages/NewsPages/News';
import MapLocation from '../Pages/LocationMap/Map';
import About from '../Pages/AboutPages/About';
import NotFound from '../Pages/NotFoundPages/NotFound';
import Navbar from '../Layouts/Navbar/Navbar';

export const router = createBrowserRouter([
    {
        element: <Navbar />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/News',
                element: <News/>,
            },
            {
                path: '/Location',
                element: <MapLocation />,
            },
            {
                path: '/About',
                element: <About />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);
