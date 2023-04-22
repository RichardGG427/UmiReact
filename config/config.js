export default {
  //plugins configure
  //   plugins: [
  //     [
  //       "umi-plugin-react",
  //       {
  //         antd: true,
  //       },
  //     ],
  //   ],
  // singular: true,
  // plugins:[
  //     ['umi-plugin-react',{

  //     }]
  // ],
  //route configure
  routes: [
    { path: "/login", component: "./login" },
    { path: "/test", component: "./test" },
    {
      path: "/",
      component: "../layout",
      routes: [
        { path: "/", redirect: "/home", name: "homepage" },
        { path: "/home", component: "./home", name: "homepage" },
        {
          path: "/home/pageview",
          component: "./home/report/pageview",
          name: "pageviews number",
        },
        {
          path: "/home/userview",
          component: "./home/report/userview",
          name: "userviews number",
        },
        {
          path: "/home/setpage",
          component: "./home/setting/setpage",
          name: "page setting",
        },
        {
          path: "/home/setlanguage",
          component: "./home/setting/setlanguage",
          name: "language setting",
        },

        { path: "/goods", component: "./goods", name: "goods page" },
        {
          path: "/about",
          component: "./about",
          name: "about page",
          wrappers: ["@/wrappers/auth"],
        },
        {
          path: "/users",
          component: "./users/_layout",
          routes: [
            { path: "/users/", component: "./users/index" },
            { path: "/users/:name", component: "./users/[name].js" },
          ],
        },
        { component: "./notfound", name: "404 page" },
      ],
    },
  ],
};
