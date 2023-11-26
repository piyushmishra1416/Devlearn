import "./Style.css";

import { SidebarData } from "./SidebarData.jsx";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav className="sidebar pt-4">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <Link to={val.link} />
              {""}
             
              {""}
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;
