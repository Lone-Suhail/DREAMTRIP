export const homeItems = [
  {
    name: "Home",
    routePath: "/",
  },
  // Uncomment if needed
  // {
  //   name: "Home 02",
  //   routePath: "/home_2",
  // },
];

export const categorieMegaMenuItems = [
  {
    id: 2,
    menuCol: [
      {
        id: 2,
        megaBanner: "/img/backgrounds/8.png",
        title: "Things to do on your tour",
        btnText: "See Tour",
        btnRoute: "/tour-list-v1",
        menuItems: [
          {
            id: 3,
            title: "Tour List",
            menuList: [
              {
                name: "Tour List v1",
                routePath: "/tour-list-v1",
              },
              {
                name: "Tour List v2",
                routePath: "/tour-list-v2",
              },
            ],
          },
          {
            id: 4,
            title: "Tour Pages",
            menuList: [
              {
                name: "Tour Map",
                routePath: "/tour-list-v3",
              },
              // Uncomment if needed
              // {
              //   name: "Tour Single",
              //   routePath: "/tour-single/5",
              // },
            ],
          },
        ],
      },
    ],
  },
];

export const categorieMobileItems = [
  {
    id: 2,
    title: "Tour",
    menuItems: [
      {
        id: 1,
        title: "Tour List",
        menuList: [
          {
            name: "Tour List v1",
            routePath: "/tour-list-v1",
          },
          {
            name: "Tour List v2",
            routePath: "/tour-list-v2",
          },
        ],
      },
      {
        id: 3,
        title: "Tour Pages",
        menuList: [
          {
            name: "Tour Map",
            routePath: "/tour-list-v3",
          },
          // Uncomment if needed
          // {
          //   name: "Tour Single",
          //   routePath: "/tour-single/5",
          // },
        ],
      },
    ],
  },
];
