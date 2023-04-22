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
    "path": "/test",
    "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/test').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('/Users/renxianggao/Desktop/UmiReact/src/layout').default,
    "routes": [
      {
        "path": "/",
        "redirect": "/home",
        "name": "homepage",
        "exact": true
      },
      {
        "path": "/home",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/home').default,
        "name": "homepage",
        "exact": true
      },
      {
        "path": "/home/pageview",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/home/report/pageview').default,
        "name": "pageviews number",
        "exact": true
      },
      {
        "path": "/home/userview",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/home/report/userview').default,
        "name": "userviews number",
        "exact": true
      },
      {
        "path": "/home/setpage",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/home/setting/setpage').default,
        "name": "page setting",
        "exact": true
      },
      {
        "path": "/home/setlanguage",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/home/setting/setlanguage').default,
        "name": "language setting",
        "exact": true
      },
      {
        "path": "/goods",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/goods').default,
        "name": "goods page",
        "exact": true
      },
      {
        "path": "/about",
        "component": require('/Users/renxianggao/Desktop/UmiReact/src/pages/about').default,
        "name": "about page",
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
        "name": "404 page",
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
