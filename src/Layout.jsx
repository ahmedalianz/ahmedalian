import AllRoutes from "./routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "components/SideBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Layout() {
  const [show, setShow] = useState(false);
  return (
    <div className="layout">
      <FontAwesomeIcon
        icon={faBars}
        className="bars"
        onClick={() => setShow((prev) => !prev)}
      />
      <SideBar showMenu={show} />
      <div className="all-routes">
        <AllRoutes />
      </div>
    </div>
  );
}
