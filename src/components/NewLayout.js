import React, { useState, useEffect, useRef, createContext } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "../styles/NewLayout.css";
import "../styles/Layout.css";
import { BiLogOutCircle } from "react-icons/bi";
import { BsBoxArrowInDownLeft } from "react-icons/bs";
import { VscSymbolColor } from "react-icons/vsc";
import { RiProfileLine, RiSearchLine } from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import { StudentRoutes, TeacherRoutes } from "../Routes";
import { SidebarData } from "./SidebarData";
import { NavLink, Link } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";
import { Loader } from "./Loader";
import axios from "axios";

export const LayoutContext = createContext();

export default function NewLayout() {
  let history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState(false);
  const [isSidenavCollapsed, setIsSidenavCollapsed] = useState(false);
  const [drawerSidebar, setDrawerSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [openMiniSearchBar, setOpenMiniSearchBar] = useState(false);
  const [open, setOpen] = useState(false);
  const uid = localStorage.getItem("user_id");
  const [error, setError] = useState("");
  const ddRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);

  const handleBtnClick = () => {
    setOpenMenu(!openMenu);
  };
  const handleBtnClick2 = () => {
    setOpenMenu2(!openMenu2);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };
  const closeMenu2 = () => {
    setOpenMenu2(false);
  };

  const ref = useOnclickOutside(() => {
    closeMenu();
  });

  const ref2 = useOnclickOutside(() => {
    closeMenu2();
  });
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme:dark)").matches;
  }

  const token = localStorage.getItem("token");

  const header = {
    Authorization: `Bearer ${token}`,
  };

  const authMe = async () => {
    try {
      const res = await axios.get("http://elearning.havicrm.tk/api/auth/me", {
        headers: header,
      });
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("user_id", res.data.id);
      setRole(localStorage.getItem("role"));
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    authMe();
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    history.push("/");
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
                } pb-1 mr-1`}
                onClick={() => setOpenMiniSearchBar((prevState) => !prevState)}
              >
                <BsBoxArrowInDownLeft size={20}/>
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
                    <RiSearchLine />
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
                      <RiSearchLine />
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="d-flex justify-content-between">
              {width <= 576 && (
                <div
                  className="centering mr-4"
                   style={{marginTop:"-5px"}}
                  onClick={() =>
                    setOpenMiniSearchBar((prevState) => !prevState)
                  }
                >
                  <RiSearchLine size="20px" />
                </div>
              )}
              <div className="btn-group" style={{marginTop:"-5px"}}>
                <button
                  className={`dropdown mr-4 ${isDarkMode? "dark-mode-icon":"light-mode-icon"}`}
                  style={{background:'none', border:"none"}}
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaIcons.FaBell size="20px" />
                </button>
                <div className="dropdown-menu dropdown-menu-right mt-3 shadow-sm p-2" style={{fontSize:"14px",  backgroundColor:`${isDarkMode?"#18181B":"#FFFFFF"}`}}>
                     <li className={`d-flex dropdown-item rounded ${
                                isDarkMode ? "dd-dark-mode" : "light"
                              } pl-2`}
                              style={
                                isDarkMode
                                  ? { cursor: "pointer", color: "#F5F5F7" }
                                  : { cursor: "pointer", color: "#000000" }
                              }>Notification</li>
                </div>
              </div>

              <div className="btn-group" style={{marginTop:"-5px"}}>
                <button
                   className={`dropdown ${isDarkMode? "dark-mode-icon":"light-mode-icon"}`}
                  style={{background:'none', border:"none"}}
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaIcons.FaUserCircle size="20px" />
                </button>
                <div className="dropdown-menu dropdown-menu-right mt-3 shadow-sm p-2" style={{fontSize:"14px", backgroundColor:`${isDarkMode?"#18181B":"#FFFFFF"}`}}>
                  <li className={`d-flex dropdown-item rounded ${
                                isDarkMode ? "dd-dark-mode" : "light"
                              } pl-2`}
                              style={
                                isDarkMode
                                  ? { cursor: "pointer", color: "#F5F5F7" }
                                  : { cursor: "pointer", color: "#000000" }
                              }>
                    <div
                      className={`${
                        isDarkMode ? "dd-dark" : "dd-white"
                      }`}
                      style={{marginRight:"30px"}}
                    >
                      <VscSymbolColor />
                      <span className="ml-2">Theme</span>
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
                    <Link
                      to="/u/profile"
                      className="d-flex"
                        style={
                              isDarkMode
                                ? { color: "#F5F5F7" }
                                : { color: "#000000" }
                            }
                    >
                  <li className={`dropdown-item rounded ${
                                isDarkMode ? "dd-dark-mode" : "light"
                              } pl-2`}
                              style={
                                isDarkMode
                                  ? { cursor: "pointer", color: "#F5F5F7" }
                                  : { cursor: "pointer", color: "#000000" }
                              }>
                      <div>
                        <RiProfileLine />
                        <span className="ml-2">Profile</span>
                      </div>
                  </li>
                    </Link>
                  <li className={`dropdown-item rounded ${
                                isDarkMode ? "dd-dark-mode" : "light"
                              } pl-2`}
                              style={
                                isDarkMode
                                  ? { cursor: "pointer", color: "#F5F5F7" }
                                  : { cursor: "pointer", color: "#000000" }
                              }>
               
                      <div
                        className={`${
                          isDarkMode ? "dd-dark" : "dd-white"
                        }`}
                        onClick={handleLogout}
                      >
                        <BiLogOutCircle />
                        <span className="ml-2">Sign Out</span>
                      </div>
                  </li>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {isLoading ? (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <>
          {" "}
          {error ? (
            <div
              className="centering"
              style={{ minHeight: "100vh", color: "red" }}
            >
              {error}
            </div>
          ) : (
            <>
              <div className="layer-underneath-navbar">&nbsp;</div>{" "}
              <div className="main-wrapper">
                <div
                  className={`sidenav ${
                    isSidenavCollapsed
                      ? "sidenav-collapsed"
                      : "sidenav-expanded"
                  } ${isDarkMode ? "dark" : "light"}-sidenav`}
                >
                  {SidebarData.map((item, index) => (
                    <NavLink
                      key={index}
                      to={item.path}
                      activeClassName="active-sidenav-link"
                      className={`${
                        isDarkMode ? "dark" : "light"
                      }-sidenav-link`}
                      exact={item.path === "/u" ? true : false}
                    >
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        {...(isSidenavCollapsed && {
                          className: "tooltip--btn",
                        })}
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
                  <LayoutContext.Provider value={{ isDarkMode, width, uid }}>
                    {role === "guru" && <TeacherRoutes />}
                    {role === "murid" && <StudentRoutes />}
                  </LayoutContext.Provider>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
