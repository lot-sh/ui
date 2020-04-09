import React from "react";
import { createUseStyles } from "react-jss";
import Logo from "./Logo";
import Navbar from "./Navbar";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Header = ({ children, ...restProps }) => {
  const styles = useStyles(restProps);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar />
      </div>
      {children}
    </header>
  );
};

export default Header;
