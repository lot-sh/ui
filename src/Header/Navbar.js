import React, { useMemo } from "react";
import { createUseStyles } from "react-jss";
import { createTrans } from "@k14v/react-i18njs";
import { useAuth } from "../Auth";

import styles from "./styles";

const useStyles = createUseStyles(styles);

const Trans = createTrans({
  component: "a",
});

const Navbar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth();
  const classes = useStyles(props);

  const handleClick = useMemo(
    () => (isAuthenticated ? logout : loginWithRedirect),
    [isAuthenticated, loginWithRedirect, logout]
  );

  return (
    <nav className={classes.navigation} role="navigation">
      <ul>
        <li>
          <Trans href="./#why">About</Trans>
        </li>
        <li>
          <Trans href="./#why">Install</Trans>
        </li>
        <li>
          <Trans href="./#why">Docs</Trans>
        </li>
        <li>
          <Trans href="./#why">Blog</Trans>
        </li>
        <li>
          <Trans onClick={handleClick}>
            {isAuthenticated ? "Logout" : "Login"}
          </Trans>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
