import React, { useState, useEffect, useRef, createContext } from "react";
import "../styles/NewLayout.css";
import "../styles/Layout.css";
import { BiLogOutCircle } from "react-icons/bi";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { RiProfileLine } from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { StudentRoutes, TeacherRoutes } from "../Routes";
import { SidebarData } from "./SidebarData";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export const LayoutContext = createContext();

export default function NewLayout() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isStudent] = useState(false);
  const [isSidenavCollapsed, setIsSidenavCollapsed] = useState(false);
  const [drawerSidebar, setDrawerSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [openMiniSearchBar, setOpenMiniSearchBar] = useState(false);
  const [open, setOpen] = useState(false);
  const ddRef = useRef();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const showSidenavCollapsed = () =>
    setIsSidenavCollapsed((prevState) => !prevState);
  const showDrawerSidebar = () => setDrawerSidebar(!drawerSidebar);

  useEffect(() => {
    closeMiniSearchbar(width);
  }, [width]);
  const closeMiniSearchbar = (width) => {
    if (width >= 576) {
      setOpenMiniSearchBar(false);
    }
  };

  return (
    <div className={`${isDarkMode ? "dark-mode" : "light-mode"} layout`}>
      <nav
        className={`fixed-navbar ${
          isDarkMode ? `navbar--dark` : `navbar--light`
        } shadow-sm d-flex align-content-center justify-content-${
          width <= 576 && openMiniSearchBar ? "center" : "between"
        }`}
      >
        {width <= 576 && openMiniSearchBar ? (
          <div
            className="d-flex bd-highlight centering"
            style={{ width: "100%" }}
          >
            <div className="bd-highlight">
              <button
                className={`mini-search-bar-btn ${
                  isDarkMode ? `dark-mode-icon` : `light-mode-icon`
                } pb-2`}
                onClick={() => setOpenMiniSearchBar((prevState) => !prevState)}
              >
                <BsBoxArrowInDownLeft />
              </button>
            </div>
            <div className="flex-grow-1 bd-highlight">
              <div className="d-flex bd-higlight search-bar">
                <div
                  className="flex-grow-1 bd-highlight"
                  style={{ position: "relative" }}
                >
                  <input
                    value={searchInput}
                    style={{
                      borderRadius: "7px 0px 0px 7px",
                      paddingRight: "25px",
                      height: "36px",
                    }}
                    className={
                      isDarkMode
                        ? "input-field-dark-mode search-bar-input"
                        : "input-field search-bar-input"
                    }
                    placeholder="Search"
                    type="text"
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  {searchInput && (
                    <span
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "6px",
                        cursor: "pointer",
                        color: "#772ce8",
                      }}
                      onClick={() => setSearchInput("")}
                    >
                      <b>x</b>
                    </span>
                  )}
                </div>
                <Link to="/u/search" className="dark-link">
                  <div
                    className={
                      isDarkMode
                        ? "bd-highlight search-icon-dark-mode"
                        : "bd-highlight search-icon"
                    }
                  >
                    <FaIcons.FaSearch />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="centering">
              <div className="drawer-sidebar-area">
                <span
                  className={`${
                    isDarkMode ? "dark-mode-icon" : "light-mode-icon"
                  } mr-4`}
                >
                  <FaIcons.FaBars
                    className="mb-1"
                    onClick={
                      width <= 768 ? showDrawerSidebar : showSidenavCollapsed
                    }
                  />
                </span>
                {width <= 768 && (
                  <nav
                    className={drawerSidebar ? "nav-menu active" : "nav-menu"}
                  >
                    <ul className="nav-menu-items" onClick={showDrawerSidebar}>
                      <li className="navbar-toggle">
                        <Link to="#" className="menu-bars light-mode-icon">
                          <FaIcons.FaBars />
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
            <div className="centering">
              {width <= 576 ? null : (
                <div
                  className="d-flex bd-higlight search-bar"
                  style={{ width: "400px" }}
                >
                  <div
                    className="flex-grow-1 bd-highlight"
                    style={{ position: "relative" }}
                  >
                    <input
                      value={searchInput}
                      style={{
                        borderRadius: "7px 0px 0px 7px",
                        paddingRight: "25px",
                        height: "36px",
                      }}
                      className={
                        isDarkMode
                          ? "input-field-dark-mode search-bar-input"
                          : "input-field search-bar-input"
                      }
                      placeholder="Search"
                      type="text"
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    {searchInput && (
                      <span
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "6px",
                          cursor: "pointer",
                          color: "#772ce8",
                        }}
                        onClick={() => setSearchInput("")}
                      >
                        <b>x</b>
                      </span>
                    )}
                  </div>
                  <Link to="/u/search" className="dark-link">
                    <div
                      className={
                        isDarkMode
                          ? "bd-highlight search-icon-dark-mode mr-2"
                          : "bd-highlight search-icon mr-2"
                      }
                    >
                      <FaIcons.FaSearch />
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between">
              {width <= 576 && (
                <div
                  className="centering mr-4"
                  onClick={() =>
                    setOpenMiniSearchBar((prevState) => !prevState)
                  }
                >
                  <FaIcons.FaSearch size="20px" />
                </div>
              )}
              <div className="centering mr-4">
                <FaIcons.FaBell size="20px" />
              </div>
              <div className="centering">
                <Dropdown
                  isDarkMode={isDarkMode}
                  myRef={ddRef}
                  open={open}
                  setOpen={setOpen}
                  icon={<FaIcons.FaUserCircle size="20px" />}
                >
                  <li className="d-flex dd-link mb-1 pt-1 pl-2">
                    <div
                      className={`centering ${
                        isDarkMode ? "dd-dark" : "dd-white"
                      }`}
                    >
                      <VscSymbolColor />
                      <span className="ml-2 mr-4">Theme</span>
                    </div>
                    <div className="toggle-button-cover">
                      <div className="btn-dark-mode r" id="button-9">
                        <input
                          type="checkbox"
                          className="checkbox"
                          value={isDarkMode}
                          defaultChecked={isDarkMode}
                          onChange={() =>
                            setIsDarkMode((prevState) => !prevState)
                          }
                        />
                        <div className="knobs">
                          <span></span>
                        </div>
                        <div className="layer"></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      to="/u/profile"
                      className={`${
                        isDarkMode ? "dd-dm-link" : "dd-lm-link"
                      } d-flex`}
                    >
                      <div
                        className={`centering ${
                          isDarkMode ? "dd-dark" : "dd-white"
                        }`}
                      >
                        <RiProfileLine />
                        <span className="ml-2">Profile</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className={`${
                        isDarkMode ? "dd-dm-link" : "dd-lm-link"
                      } d-flex`}
                    >
                      <div
                        className={`centering ${
                          isDarkMode ? "dd-dark" : "dd-white"
                        }`}
                      >
                        <BiLogOutCircle />
                        <span className="ml-2">Sign Out</span>
                      </div>
                    </Link>
                  </li>
                </Dropdown>
              </div>
            </div>
          </>
        )}
      </nav>
      <div className="layer-underneath-navbar">&nbsp;</div>
      <div className="main-wrapper">
        <div
          className={`sidenav ${
            isSidenavCollapsed ? "sidenav-collapsed" : "sidenav-expanded"
          } ${isDarkMode ? "dark" : "light"}-sidenav`}
        >
          {SidebarData.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              activeClassName="active-sidenav-link"
              className={`${isDarkMode ? "dark" : "light"}-sidenav-link`}
              exact={item.path === "/u" ? true : false}
            >
              <div
                style={{ display: "flex", alignItems: "center" }}
                {...(isSidenavCollapsed && { className: "tooltip--btn" })}
              >
                {item.icon}
                {isSidenavCollapsed && (
                  <abbr className="classic">{item.title}</abbr>
                )}
                <span>{item.title}</span>
              </div>
            </NavLink>
          ))}
        </div>
        <div
          className={`main ${isDarkMode ? "dark-mode-area" : null} ${
            isSidenavCollapsed ? "area-expanded" : "area-collapsed"
          }`}
        >
          <LayoutContext.Provider value={{ isDarkMode, width }}>
            {isStudent ? <StudentRoutes /> : <TeacherRoutes />}
          </LayoutContext.Provider>
        </div>
      </div>
    </div>
  );
}
