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
    { path: "/", component: "./index" },
    { path: "/login", component: "./login" },
    { path: "/goods", component: "./goods" },
    {
      path: "/about",
      component: "./about",
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
    { component: "./notfound" },
  ],
};
