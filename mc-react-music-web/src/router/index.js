import React from 'react';
import {Redirect} from 'react-router-dom';

import MCDiscover from '@/pages/discover';
import MCFriend from '@/pages/friend';
import MCMine from '@/pages/mine';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/discover"/>
    }
  },
  {
    path: '/discover',
    exact: true,
    component: MCDiscover
  },
  {
    path: '/friend',
    component: MCFriend
  },
  {
    path: '/mine',
    component: MCMine
  },
]

export default routes;