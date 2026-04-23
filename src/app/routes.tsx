import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Activities } from './pages/Activities';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'services', Component: Services },
      { path: 'activities', Component: Activities },
      { path: 'careers', Component: Careers },
      { path: 'contact', Component: Contact },
    ],
  },
]);
