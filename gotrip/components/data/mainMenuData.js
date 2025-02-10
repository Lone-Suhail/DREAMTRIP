export const homeItems = [
  { name: "Home", routePath: "/" },
];

export const categorieMegaMenuItems = [
  {
    id: 2,
    menuCol: [
      {
        megaBanner: "/img/backgrounds/8.png",
        title: "Things to do on your tour",
        btnText: "See Tour",
        btnRoute: "/tour-list-v1",
        menuItems: [
          {
            title: "Tour List",
            menuList: [
              { name: "Tour List v1", routePath: "/tour-list-v1" },
              { name: "Tour List v2", routePath: "/tour-list-v2" },
            ],
          },
          {
            title: "Tour Pages",
            menuList: [
              { name: "Tour Map", routePath: "/tour-list-v3" },
              { name: "Tour Single", routePath: "/tour-single/5" },
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
        title: "Tour List",
        menuList: [
          { name: "Tour List v1", routePath: "/tour-list-v1" },
          { name: "Tour List v2", routePath: "/tour-list-v2" },
        ],
      },
      {
        title: "Tour Pages",
        menuList: [
          { name: "Tour Map", routePath: "/tour-list-v3" },
          { name: "Tour Single", routePath: "/tour-single/5" },
        ],
      },
    ],
  },
];
