export const homeItems = [
  {
    name: "Home",
    routePath: "/",
  },
];
export const pageItems = [
  {
    name: "404",
    routePath: "/404",
  },
  {
    name: "About",
    routePath: "/about",
  },
  {
    name: "Become Expert",
    routePath: "/become-expert",
  },
  {
    name: "Help Center",
    routePath: "/help-center",
  },
  {
    name: "Login",
    routePath: "/login",
  },
  {
    name: "Register",
    routePath: "/signup",
  },
  {
    name: "Terms",
    routePath: "/terms",
  },
  {
    name: "Invoice",
    routePath: "/invoice",
  },
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
            id: 2,
            title: "Tour Pages",
            menuList: [
              {
                name: "Tour Map",
                routePath: "/tour-list-v3",
              },
              {
                name: "Tour Single",
                routePath: "/tour-single/5",
              },
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
        id: 2,
        title: "Tour Pages",
        menuList: [
          {
            name: "Tour Map",
            routePath: "/tour-list-v3",
          },
          {
            name: "Tour Single",
            routePath: "/tour-single/5",
          },
        ],
      },
    ],
  },
];
