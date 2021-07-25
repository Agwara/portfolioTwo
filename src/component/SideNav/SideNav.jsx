import React from "react";
import DesktopSideNav from "./DesktopSideNav";
import MobileSideNav from "./MobileSideNav";

import useWindowWidth from "../../hooks/useWindowWidth";

const SideNav = () => {
  const breakpoint = 900;

  const newWidth = useWindowWidth();
  
  return (
    <div className="side-nav-position">
      {
        newWidth > breakpoint ? <DesktopSideNav /> : <MobileSideNav />
      }
    </div>  
  )
}

export default SideNav;