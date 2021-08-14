import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll
} from "body-scroll-lock";
import { useEffect, useRef, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import "./App.css";
import { Home, Store, Service, AboutUs, Contacts } from "./pages/pages";
import { Menu } from "./Menu/Menu";

function App() {
  const [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => setmenuActive(!menuActive);
  const closeMenu = () => setmenuActive(false);
  const stopPropagation = (e) => e.stopPropagation();

  const menuRef = useRef();

  // Disabling scroll after opening a Modal window.
  useEffect(() => {
    const targetElement = menuRef.current;

    menuActive ? disableBodyScroll(targetElement) :
      enableBodyScroll(targetElement);

    return () => {
      clearAllBodyScrollLocks();
    }
  }, [menuActive])

  const items = [
    { value: "Home", href: "/home", icon: "home" },
    { value: "Store", href: "/store", icon: "store" },
    { value: "Service", href: "/service", icon: "api" },
    { value: "About us", href: "/about", icon: "android" },
    { value: "Contacts", href: "/contacts", icon: "contacts" },
  ]

  return (
    <div className="app">
      <nav className="nav">
        <div className={menuActive ? "burger-btn active" : "burger-btn"} onClick={toggleMenu}>
          <span />
        </div>
      </nav>
      <main className="main">
        <Redirect exact from="/" to="/home" />
        <Route path='/home' render={() => <Home />} />
        <Route path='/store' render={() => <Store />} />
        <Route path='/service' render={() => <Service />} />
        <Route path='/about' render={() => <AboutUs />} />
        <Route path='/contacts' render={() => <Contacts />} />
      </main>
      <Menu
        active={menuActive}
        header={"Hamburger menu"}
        items={items}
        closeMenu={closeMenu}
        menuRef={menuRef}
        stopPropagation={stopPropagation}
      />
    </div>
  );
}

export default App;
