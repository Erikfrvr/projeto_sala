import Sidebar from "../components/Sidebar";
import "./Menu.css";
import { Outlet } from "react-router-dom";

function Menu() {
  return (
    <div className="containerMenu">
<Sidebar/>
    <div className="paineis">
        <Outlet/>
    </div>

    </div>
  );
}
export default Menu;