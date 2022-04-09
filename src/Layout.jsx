import AllRoutes from "./routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "components/SideBar";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Layout() {
  return (
    <div className="layout">
      <FontAwesomeIcon icon={faBars} className="bars" />
      <SideBar />
      <div className="all-routes">
        <AllRoutes />
      </div>
    </div>
  );
}
