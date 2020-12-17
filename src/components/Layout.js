import React, { useState, useEffect } from "react";
import "../styles/Layout.css";
import { GoBell } from "react-icons/go";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { StudentRoutes, TeacherRoutes } from "../Routes";
import { SidebarData } from "./SidebarData";
import { NavLink, Link } from "react-router-dom";

const Layout = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const [sidebar, setSidebar] = useState(false);
  const [drawerSidebar, setDrawerSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const showDrawerSidebar = () => setDrawerSidebar(!drawerSidebar);

  return (
    <>
      <div className={sidebar ? "mini-sidebar" : "sidebar"}>
        {SidebarData.map((item, index) => (
          <NavLink
            to={item.path}
            activeStyle={{
              fontWeight: "bold",
              color: "#772CE8",
            }}
            exact={item.path === "/u" ? true : false}
          >
          
            <div style={{ display: "flex", alignItems: "center" }}>
              {item.icon}
              <span>{item.title}</span>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="custom-navbar" style={{ width: "100%" }}>
        <div className="row fixed-top fixed-nav centering shadow-sm">
          <div className="col-2">
            <div className="nav-icon">
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars
                  color="black"
                  onClick={width <= 768 ? showDrawerSidebar : showSidebar}
                />
              </Link>
              {width <= 768 && (
                <nav className={drawerSidebar ? "nav-menu active" : "nav-menu"}>
                  <ul className="nav-menu-items" onClick={showDrawerSidebar}>
                    <li className="navbar-toggle">
                      <Link to="#" className="menu-bars">
                        <FaIcons.FaBars color="black" />
                      </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                      return (
                        <li key={index} className={item.cName}>
                          <NavLink
                            to={item.path}
                            activeStyle={{
                              fontWeight: "bold",
                              color: "#772CE8",
                            }}
                            exact={item.path === "/u" ? true : false}
                          >
                            {item.icon}
                            <span className="item-title">{item.title}</span>
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </div>
          </div>
          <div className="col-8">
            <div className="d-flex bd-higlight search-bar">
              <div className="flex-grow-1 bd-highlight">
                <input
                style={{borderRadius:"5px 0px 0px 5px"}}
                  className="input-field search-bar-input"
                  placeholder="Search"
                  type="text"
                />
              </div>
              <Link to="/u/search" className="dark-link">
                <div className="bd-highlight search-icon mr-2">
                  <FaIcons.FaSearch />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-2 d-flex justify-content-end pr-4">
            <div className="d-flex">
              <div className="dropleft mr-3">
                <div
                  className="dropdown notif-btn"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <GoBell size="20px" color="black" />
                </div>
                <div className="dropdown-menu" style={{ fontSize: "14px" }}>
                  <h6 className="dropdown-header">Notification</h6>
                </div>
              </div>

              <div className="dropleft">
                <div
                  className="dropdown user-btn"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ border: "none", backgroundColor: "transparent" }}
                >
                  <FaIcons.FaUserCircle size="20px" color="black" />
                </div>
                <div className="dropdown-menu p-2" style={{ fontSize: "14px" }}>
                  <Link to="/u/profile" style={{ textDecoration: "none" }}>
                    <button
                      className="dropdown-item rounded dark-link"
                      type="button"
                    >
                      Profile
                    </button>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    {" "}
                    <button
                      className="dropdown-item rounded dark-link"
                      type="button"
                    >
                      Sign Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content"
          style={
            width <= 768
              ? { marginLeft: "0", marginTop: "40px" }
              : sidebar
              ? { marginLeft: "70px", marginTop: "40px" }
              : { marginLeft: "240px", marginTop: "40px" }
          }
        >
         {isStudent? <StudentRoutes />:<TeacherRoutes/> } 
        </div>
      </div>
    </>
  );
};

export default Layout;
