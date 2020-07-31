import Home from '../views/home/Home'
import About, {AboutMessage, AboutProduct} from '../views/about/About'
import Profile from '../views/profile/Profile'

import Login from '../views/login/Login'

const routes = [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/home/123',
    component: Home
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about',
        exact: true,
        component: AboutProduct
      },
      {
        path: '/about/message',
        component: AboutMessage
      }
    ]
  },
  {
    path: '/profile',
    component: Profile
  },
]

export default routes