import { createBrowserRouter } from 'react-router-dom';
import { Characters, Locations, Episodes, Character, Location } from '../pages';

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Characters />
    },
    {
        path: '/characters',
        element: <Characters />,
    },
    {
        path: 'characters/:character_id',
        element: <Character />
    },
    {
        path: '/locations',
        element: <Locations />
    },
    {
        path: 'location/location_id',
        element: <Location />
    },
    {
        path: '/episodes',
        element: <Episodes />
    }
])