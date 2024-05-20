import App from '../App.js';

import Error from '../pages/HomePage.js';

import Home from '../pages/HomePage.js';
import ControlTimer from '../pages/ControlTimePage.js';

const Routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/control',
        element: <ControlTimer />,
      },
    ],
  },
];

export default Routes;
