import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

export const routesList = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    exact: true,
    component: About,
  },
  {
    name: 'Contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
];
