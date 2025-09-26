// src/components/navigation/Navigation.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faHome,
  faRightToBracket,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  LogoLink,
  NavLinks,
  NavItemLink,
  LoginLink,
  UserInfo,
  NavIcon,
  UserIcon,
  UserName,
  NavLabel,
  LoginListItem,
} from "./NavigationStyles";

function Navigation({ user }) {
  return (
    <Navbar>
      <LogoLink as={Link} to="/">
        MyraMU
      </LogoLink>

      <NavLinks>
        <li>
          <NavItemLink as={Link} to="/">
            <NavIcon>
              <FontAwesomeIcon icon={faHome} />
            </NavIcon>
            <NavLabel>Home</NavLabel>
          </NavItemLink>
        </li>

        <li>
          <NavItemLink as={Link} to="/downloads">
            <NavIcon className="small">
              <FontAwesomeIcon icon={faDownload} />
            </NavIcon>
            <NavLabel>Download</NavLabel>
          </NavItemLink>
        </li>

        <li>
          <NavItemLink
            href="https://discord.gg/NFwQxTJY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NavIcon>
              <FontAwesomeIcon icon={faUsers} />
            </NavIcon>
            <NavLabel>Community</NavLabel>
          </NavItemLink>
        </li>

        {!user ? (
          <LoginListItem>
            <NavItemLink as={Link} to="/login">
              <NavIcon>
                <FontAwesomeIcon icon={faRightToBracket} />
              </NavIcon>
              <NavLabel>Login</NavLabel>
            </NavItemLink>
          </LoginListItem>
        ) : (
          <UserInfo>
            <UserIcon>
              <FontAwesomeIcon icon={faUser} />
            </UserIcon>
            <UserName>{user}</UserName>
          </UserInfo>
        )}
      </NavLinks>
    </Navbar>
  );
}

export default Navigation;
