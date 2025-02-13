import Link from "next/link";
import { homeItems } from "../../data/mainMenuData"; // Assuming homeItems contains the default home route
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false);

  // Find the default home route (e.g., the first item in homeItems)
  const defaultHomeRoute = homeItems[0]?.routePath || "/";

  return (
    <nav className="menu js-navList" role="navigation">
      <ul className={`menu__nav ${style} -is-active`}>
        {/* Home Menu (without dropdown) */}
        <li className={isActiveLink(defaultHomeRoute, pathname) ? "current" : ""}>
          <Link href={defaultHomeRoute}>
            <span className="mr-10">Home</span>
          </Link>
        </li>
        {/* End home page menu */}

        {/* Categories Mega Menu */}
        <li className={`menu-item-has-children -has-mega-menu ${isActiveParent ? "current" : ""}`}>
          <a href="#" aria-haspopup="true" aria-expanded={isActiveParent}>
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu setIsActiveParent={setIsActiveParent} />
          </div>
        </li>
        {/* End categories menu */}

        {/* Destinations Menu */}
        <li className={pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li>
        {/* End destinations menu */}

        {/* Contact Menu */}
        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
