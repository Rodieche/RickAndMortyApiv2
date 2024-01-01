import { createBrowserRouter } from 'react-router-dom';
import { Character, Location, Episode, Home } from '../pages';

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
    }
])