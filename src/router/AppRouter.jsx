import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Character, Location, Episode, Home, NotFound, } from '../pages';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path: 'characters/:character_id',
        element: <Character />
    },
    {
        path: 'locations/:location_id',
        element: <Location />
    },
    {
        path: '/episodes/:episode_id',
        element: <Episode />
    },
    {
        path: 'notfound',
        element: <NotFound />
    },
    {
        path: '*',
        element: <Navigate to='/notfound' replace={ true } />
    }
])