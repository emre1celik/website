import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarAlt,
  faCircleInfo,
  faDownload,
  faMedal,
  faRightToBracket,
  faUser,
  faUsers,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LanguageSelector from "../language/LanguageSelector";
import { useTranslation } from "../../context/TranslationContext";
import {
  NavigationWrapper,
  NavigationLogo,
  NavigationLinks,
  NavigationItemLink,
  NavigationUserInfo,
  NavigationIcon,
  NavigationUserIcon,
  NavigationUserName,
  NavigationLabel,
  NavigationLoginLink,
  HamburgerButton,
  MobileDrawer,
  DrawerBackdrop,
  DrawerHeader,
  DrawerLogo,
  DrawerCloseButton,
} from "./NavigationStyles";

function Navigation({ user }) {
  const location = useLocation();
  const { translate } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef();

  // Close when clicking outside drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <NavigationWrapper>
        <NavigationLogo as={Link} to="/">
          <div>MyraMU</div>
        </NavigationLogo>

        {/* Desktop nav */}
        <NavigationLinks>
          <li>
            <NavigationItemLink
              as={Link}
              to="/downloads"
              $active={location.pathname === "/downloads"}
            >
              <NavigationIcon>
                <FontAwesomeIcon icon={faDownload} />
              </NavigationIcon>
              <NavigationLabel>
                {translate("navigation.download")}
              </NavigationLabel>
            </NavigationItemLink>
          </li>

          <li>
            <NavigationItemLink
              as={Link}
              to="/highscores"
              $active={location.pathname === "/highscores"}
            >
              <NavigationIcon>
                <FontAwesomeIcon icon={faMedal} />
              </NavigationIcon>
              <NavigationLabel>
                {translate("navigation.highscores")}
              </NavigationLabel>
            </NavigationItemLink>
          </li>

          <li>
            <NavigationItemLink
              as={Link}
              to="/events"
              $active={location.pathname === "/events"}
            >
              <NavigationIcon>
                <FontAwesomeIcon icon={faCalendarAlt} />
              </NavigationIcon>
              <NavigationLabel>
                {translate("navigation.events")}
              </NavigationLabel>
            </NavigationItemLink>
          </li>

          <li>
            <NavigationItemLink
              as={Link}
              to="/info"
              $active={location.pathname === "/info"}
            >
              <NavigationIcon>
                <FontAwesomeIcon icon={faCircleInfo} />
              </NavigationIcon>
              <NavigationLabel>{translate("navigation.info")}</NavigationLabel>
            </NavigationItemLink>
          </li>

          <li>
            <NavigationItemLink
              as={Link}
              to="/community"
              $active={location.pathname === "/community"}
            >
              <NavigationIcon>
                <FontAwesomeIcon icon={faUsers} />
              </NavigationIcon>
              <NavigationLabel>
                {translate("navigation.community")}
              </NavigationLabel>
            </NavigationItemLink>
          </li>

          {!user ? (
            <NavigationLoginLink>
              <NavigationItemLink
                as={Link}
                to="/login"
                $active={location.pathname === "/login"}
              >
                <NavigationIcon>
                  <FontAwesomeIcon icon={faRightToBracket} />
                </NavigationIcon>
                <NavigationLabel>
                  {translate("navigation.login")}
                </NavigationLabel>
              </NavigationItemLink>
            </NavigationLoginLink>
          ) : (
            <NavigationUserInfo>
              <NavigationItemLink as={Link} to="/control-panel">
                <NavigationUserIcon>
                  <FontAwesomeIcon icon={faUser} />
                </NavigationUserIcon>
                <NavigationUserName>{user}</NavigationUserName>
              </NavigationItemLink>
            </NavigationUserInfo>
          )}

          <li>
            <LanguageSelector />
          </li>
        </NavigationLinks>

        {/* Hamburger for mobile */}
        <HamburgerButton onClick={() => setMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </HamburgerButton>
      </NavigationWrapper>

      {/* Backdrop */}
      {menuOpen && <DrawerBackdrop onClick={() => setMenuOpen(false)} />}

      {/* Mobile slide-in drawer */}
      <MobileDrawer ref={drawerRef} $open={menuOpen}>
        <DrawerHeader>
          <DrawerLogo as={Link} to="/" onClick={() => setMenuOpen(false)}>
            MyraMU
          </DrawerLogo>

          <DrawerCloseButton
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </DrawerCloseButton>
        </DrawerHeader>

        <li>
          <NavigationItemLink
            as={Link}
            to="/downloads"
            onClick={() => setMenuOpen(false)}
            $active={location.pathname === "/downloads"}
          >
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: 10 }} />
            {translate("navigation.download")}
          </NavigationItemLink>
        </li>

        <li>
          <NavigationItemLink
            as={Link}
            to="/highscores"
            onClick={() => setMenuOpen(false)}
            $active={location.pathname === "/highscores"}
          >
            <FontAwesomeIcon icon={faMedal} style={{ marginRight: 10 }} />
            {translate("navigation.highscores")}
          </NavigationItemLink>
        </li>

        <li>
          <NavigationItemLink
            as={Link}
            to="/events"
            onClick={() => setMenuOpen(false)}
            $active={location.pathname === "/events"}
          >
            <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: 10 }} />
            {translate("navigation.events")}
          </NavigationItemLink>
        </li>

        <li>
          <NavigationItemLink
            as={Link}
            to="/info"
            onClick={() => setMenuOpen(false)}
            $active={location.pathname === "/info"}
          >
            <FontAwesomeIcon icon={faCircleInfo} style={{ marginRight: 10 }} />
            {translate("navigation.info")}
          </NavigationItemLink>
        </li>

        <li>
          <NavigationItemLink
            href="https://discord.gg/EceQbCVgSy"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: 10 }} />
            {translate("navigation.community")}
          </NavigationItemLink>
        </li>

        {!user ? (
          <li>
            <NavigationItemLink
              as={Link}
              to="/login"
              onClick={() => setMenuOpen(false)}
              $active={location.pathname === "/login"}
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                style={{ marginRight: 10 }}
              />
              {translate("navigation.login")}
            </NavigationItemLink>
          </li>
        ) : (
          <li>
            <NavigationItemLink
              as={Link}
              to="/control-panel"
              onClick={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faUser} style={{ marginRight: 10 }} />
              {user}
            </NavigationItemLink>
          </li>
        )}

        <li>
          <LanguageSelector />
        </li>
      </MobileDrawer>
    </>
  );
}

export default Navigation;
