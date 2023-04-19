// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/renxianggao/Desktop/UmiReact/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/login').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('/Users/renxianggao/Desktop/UmiReact/src/layout/index').default,
    "routes": [
      {
        "path": "/",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/index').default,
        "exact": true
      },
      {
        "path": "/goods",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/goods').default,
        "exact": true
      },
      {
        "path": "/about",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/about').default,
        "wrappers": [require('@/wrappers/auth').default],
        "exact": true
      },
      {
        "path": "/users",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/users/_layout').default,
        "routes": [
          {
            "path": "/users/",
            "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/users/index').default,
            "exact": true
          },
          {
            "path": "/users/:name",
            "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/users/[name].js').default,
            "exact": true
          }
        ]
      },
      {
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/notfound').default,
        "exact": true
      }
    ]
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
