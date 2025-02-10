"use client";

import Link from "next/link";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { homeItems, categorieMobileItems, categorieMegaMenuItems, pageItems, dashboardItems } from "../../data/mainMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isActiveParent, setIsActiveParent] = useState(false);
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false);
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false);

  useEffect(() => {
    categorieMegaMenuItems.forEach((megaMenu) => {
      megaMenu?.menuCol?.forEach((megaCol) => {
        megaCol?.menuItems?.forEach((item) => {
          item?.menuList?.forEach((list) => {
            if (list.routePath?.split("/")[1] === pathname.split("/")[1]) {
              setIsActiveParent(true);
              setisActiveNestedParentTwo(item?.title);
              setisActiveNestedParent(megaMenu?.id);
            }
          });
        });
      });
    });
  }, [pathname]);

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
          <i className="icon icon-close"></i>
        </div>
      </div>

      <Sidebar width="400" backgroundColor="#fff">
        <Menu>
          <SubMenu label="Home" className={homeItems.some((item) => item.routePath?.split("/")[1] === pathname.split("/")[1]) ? "menu-active-link" : ""}>
            {homeItems.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => router.push(item.routePath)}
                className={isActiveLink(item.routePath, pathname) ? "menu-active-link" : "inactive-menu"}
              >
                {item.name}
              </MenuItem>
            ))}
          </SubMenu>

          <SubMenu label="Categories" className={isActiveParent ? "menu-active-link" : ""}>
            {categorieMobileItems.map((item) => (
              <SubMenu label={item.title} key={item.id} className={isActiveNestedParent === item.id ? "menu-active-link" : "inactive-menu"}>
                {item.menuItems.map((single) => (
                  <SubMenu label={single.title} key={single.id} className={isActiveNestedParentTwo === single.title ? "menu-active-link" : "inactive-menu"}>
                    {single.menuList.map((menu, i) => (
                      <MenuItem
                        key={i}
                        onClick={() => router.push(menu.routePath)}
                        className={isActiveLink(menu.routePath, pathname) ? "menu-active-link" : "inactive-menu"}
                      >
                        {menu.name}
                      </MenuItem>
                    ))}
                  </SubMenu>
                ))}
              </SubMenu>
            ))}
          </SubMenu>

          <MenuItem onClick={() => router.push("/destinations")} className={pathname === "/destinations" ? "menu-active-link" : ""}>
            Destinations
          </MenuItem>

          <SubMenu label="Pages" className={pageItems.some((item) => item.routePath?.split("/")[1] === pathname.split("/")[1]) ? "menu-active-link" : ""}>
            {pageItems.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => router.push(item.routePath)}
                className={isActiveLink(item.routePath, pathname) ? "menu-active-link" : "inactive-menu"}
              >
                {item.name}
              </MenuItem>
            ))}
          </SubMenu>

          <SubMenu label="Dashboard" className={pathname.split("/")[1] === "dashboard" || pathname.split("/")[1] === "vendor-dashboard" ? "menu-active-link" : ""}>
            {dashboardItems.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => router.push(item.routePath)}
                className={isActiveLink(item.routePath, pathname) ? "menu-active-link" : "inactive-menu"}
              >
                {item.name}
              </MenuItem>
            ))}
          </SubMenu>

          <MenuItem onClick={() => router.push("/contact")} className={pathname === "/contact" ? "menu-active-link" : ""}>
            Contact
          </MenuItem>
        </Menu>
      </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <Link className="button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white" href="/login">
            Become An Expert
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
