//左侧菜单栏数据，根据点击头部一级菜单动态改变
const menuList = [
  //第一个一级菜单的二级菜单数据
  [
    {
      title: "Statistical Forms",
      keyValue: "sub1",
      iconType: "user",
      children: [
        {
          title: "Pageviews Report",
          keyValue: "1",
          routeurl: "/home/pageview",
        },
        {
          title: "Users Views Report",
          keyValue: "2",
          routeurl: "/home/userview",
        },
      ],
    },
    {
      title: "Setting",
      keyValue: "sub2",
      iconType: "laptop",
      children: [
        {
          title: "Page Setting",
          keyValue: "3",
          routeurl: "/home/setpage",
        },
        {
          title: "Language Setting",
          keyValue: "4",
          routeurl: "/home/setlanguage",
        },
      ],
    },
  ],
  //第二个一级菜单的二级菜单数据
  [
    {
      title: "About Distance Education",
      keyValue: "sub1",
      iconType: "notification",
      children: [
        {
          title: "Distance Education Category",
          keyValue: "1",
          routeurl: "/about/educationtype",
        },
        {
          title: "How to choose",
          keyValue: "2",
          routeurl: "/about/seleducation",
        },
      ],
    },
    {
      title: "About",
      keyValue: "sub2",
      iconType: "user",
      children: [
        {
          title: "Front end",
          keyValue: "3",
          routeurl: "/about/frontend",
        },
        {
          title: "Back end",
          keyValue: "4",
          routeurl: "/about/backend",
        },
      ],
    },
  ],
  //第三个一级菜单的二级菜单数据
  [
    {
      title: "Streaming Course",
      keyValue: "sub1",
      iconType: "laptop",
      children: [
        {
          title: "java",
          keyValue: "1",
          routeurl: "/goods/livejava",
        },
        {
          title: "Architect",
          keyValue: "2",
          routeurl: "/goods/livearchitect",
        },
      ],
    },
    {
      title: "Recorded Course",
      keyValue: "sub2",
      iconType: "notification",
      children: [
        {
          title: "Front end",
          keyValue: "3",
          routeurl: "/goods/frontcourse",
        },
        {
          title: "Back end",
          keyValue: "4",
          routeurl: "/goods/backendcourse",
        },
      ],
    },
  ],
];
export default menuList;
