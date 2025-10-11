import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarAlt,
  faCircleInfo,
  faDownload,
  faHome,
  faMedal,
  faRightToBracket,
  faUser,
  faUsers,
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
  CollapsedMenu,
} from "./NavigationStyles";

function Navigation({ user }) {
  const location = useLocation();
  const { translate } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <NavigationWrapper>
      <NavigationLogo as={Link} to="/">
        <div>MyraMU</div>
      </NavigationLogo>

      {/* Regular navigation links */}
      <NavigationLinks>
        <li>
          <NavigationItemLink
            as={Link}
            to="/"
            $active={location.pathname === "/"}
          >
            <NavigationIcon>
              <FontAwesomeIcon icon={faHome} />
            </NavigationIcon>
            <NavigationLabel>{translate("navigation.home")}</NavigationLabel>
          </NavigationItemLink>
        </li>
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
            <NavigationLabel>{translate("navigation.events")}</NavigationLabel>
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
            href="https://discord.gg/EceQbCVgSy"
            target="_blank"
            rel="noopener noreferrer"
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
              <NavigationLabel>{translate("navigation.login")}</NavigationLabel>
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

        {/* Hamburger icon for small screens */}
        <HamburgerButton onClick={() => setMenuOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </HamburgerButton>
      </NavigationLinks>

      {/* Collapsed menu for mobile */}
      {menuOpen && (
        <CollapsedMenu ref={menuRef}>
          <li>
            <NavigationItemLink
              as={Link}
              to="/"
              onClick={() => setMenuOpen(false)}
              $active={location.pathname === "/"}
            >
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />{" "}
              {translate("navigation.home")}
            </NavigationItemLink>
          </li>
          <li>
            <NavigationItemLink
              as={Link}
              to="/downloads"
              onClick={() => setMenuOpen(false)}
              $active={location.pathname === "/downloads"}
            >
              <FontAwesomeIcon
                icon={faDownload}
                style={{ marginRight: "10px" }}
              />
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
              <FontAwesomeIcon icon={faMedal} style={{ marginRight: "10px" }} />
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
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ marginRight: "10px" }}
              />
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
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ marginRight: "10px" }}
              />
              {translate("navigation.info")}
            </NavigationItemLink>
          </li>
          <li>
            <NavigationItemLink
              href="https://discord.gg/EceQbCVgSy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faUsers} style={{ marginRight: "10px" }} />
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
                  style={{ marginRight: "10px" }}
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
                <FontAwesomeIcon icon={faUser} />
                {user}
              </NavigationItemLink>
            </li>
          )}
          <li>
            <LanguageSelector />
          </li>
        </CollapsedMenu>
      )}
    </NavigationWrapper>
  );
}

export default Navigation;
