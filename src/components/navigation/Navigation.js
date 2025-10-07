import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faDownload,
  faHome,
  faMedal,
  faRightToBracket,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  NavigationLogo,
  NavigationLinks,
  NavigationItemLink,
  NavigationUserInfo,
  NavigationIcon,
  NavigationUserIcon,
  NavigationUserName,
  NavigationLabel,
  NavigationLoginLink,
  NavigationWrapper,
} from "./NavigationStyles";
import LanguageSelector from "../language/LanguageSelector";
import { useTranslation } from "../../context/TranslationContext";

function Navigation({ user }) {
  const location = useLocation();
  const { translate } = useTranslation();

  return (
    <NavigationWrapper>
      <NavigationLogo
        as={Link}
        to="/"
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* Logo to favicon */}
        <img
          src="/favicon.png"
          alt="MyraMU Logo"
          style={{
            width: "30px",
            marginRight: "10px",
          }}
        />
        <div>MyraMU</div>
      </NavigationLogo>

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
            <NavigationIcon className="small">
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
            <NavigationIcon className="small">
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
            <NavigationIcon className="small">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </NavigationIcon>
            <NavigationLabel>{translate("navigation.events")}</NavigationLabel>
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
        <LanguageSelector />
      </NavigationLinks>
    </NavigationWrapper>
  );
}

export default Navigation;
