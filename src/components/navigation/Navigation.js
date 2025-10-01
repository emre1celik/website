import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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

function Navigation({ user }) {
  return (
    <NavigationWrapper>
      <NavigationLogo as={Link} to="/">
        MyraMU
      </NavigationLogo>

      <NavigationLinks>
        <li>
          <NavigationItemLink as={Link} to="/">
            <NavigationIcon>
              <FontAwesomeIcon icon={faHome} />
            </NavigationIcon>
            <NavigationLabel>Home</NavigationLabel>
          </NavigationItemLink>
        </li>

        <li>
          <NavigationItemLink as={Link} to="/downloads">
            <NavigationIcon className="small">
              <FontAwesomeIcon icon={faDownload} />
            </NavigationIcon>
            <NavigationLabel>Download</NavigationLabel>
          </NavigationItemLink>
        </li>

        <li>
          <NavigationItemLink as={Link} to="/highscores">
            <NavigationIcon className="small">
              <FontAwesomeIcon icon={faMedal} />
            </NavigationIcon>
            <NavigationLabel>Highscores</NavigationLabel>
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
            <NavigationLabel>Community</NavigationLabel>
          </NavigationItemLink>
        </li>

        {!user ? (
          <NavigationLoginLink>
            <NavigationItemLink as={Link} to="/login">
              <NavigationIcon>
                <FontAwesomeIcon icon={faRightToBracket} />
              </NavigationIcon>
              <NavigationLabel>Login</NavigationLabel>
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
      </NavigationLinks>
    </NavigationWrapper>
  );
}

export default Navigation;
