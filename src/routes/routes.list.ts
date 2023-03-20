import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

export const routesList = [
  {
    id: 'home-a',
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    id: 'about-a',
    name: 'About',
    path: '/about',
    exact: true,
    component: About,
  },
  {
    id: 'contact-a',
    name: 'Contact',
    path: '/contact',
    exact: true,
    component: Contact,
  },
];
