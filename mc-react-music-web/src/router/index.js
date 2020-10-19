import React from 'react';
import { Redirect } from 'react-router-dom';

import MCDiscover from '@/pages/discover';
import MCRecommend from '@/pages/discover/c-pages/recommend';
import MCToplist from '@/pages/discover/c-pages/toplist';
import MCPlaylist from '@/pages/discover/c-pages/playlist';
import MCDjradio from '@/pages/discover/c-pages/djradio';
import MCArtist from '@/pages/discover/c-pages/artist';
import MCAlbum from '@/pages/discover/c-pages/album';

import MCFriend from '@/pages/friend';
import MCMine from '@/pages/mine';

const routes = [
  {
    path: '/',
    exact: true,
    render: () => {
      return <Redirect to="/discover" />
    }
  },
  {
    path: '/discover',
    component: MCDiscover,
    children: [
      {
        path: '/discover',
        exact: true,
        render: () => {
          return <Redirect to="/discover/recommend" />
        }
      },
      {
        path: '/discover/recommend',
        component: MCRecommend
      },
      {
        path: '/discover/toplist',
        component: MCToplist
      },
      {
        path: '/discover/playlist',
        component: MCPlaylist
      },
      {
        path: '/discover/djradio',
        component: MCDjradio
      },
      {
        path: '/discover/artist',
        component: MCArtist
      },
      {
        path: '/discover/album',
        component: MCAlbum
      }
    ]
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