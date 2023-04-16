// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/usr/local/lib/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/about",
    "exact": true,
    "component": require('@/pages/about.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/users",
    "routes": [
      {
        "path": "/users",
        "exact": true,
        "component": require('@/pages/users/index.js').default
      },
      {
        "path": "/users/:name",
        "exact": true,
        "component": require('@/pages/users/[name].js').default
      }
    ],
    "component": require('@/pages/users/_layout.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
