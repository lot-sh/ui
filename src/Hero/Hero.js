import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";
import Trls from "@k14v/react-i18njs";
import { Parallax } from "react-scroll-parallax";
import styles from "./styles";
import Button from "../Button";

const useStyles = createUseStyles(styles);

const Hero = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.hero}>
      <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
        <div className={classes.text}>
          <Trls component="h2" className={classes.header}>
            Make usefull shell scripts accesible by everyone
          </Trls>
          <Trls component="h3" className={classes.header}>
            POSIX simple scripts in multiple languages wich resolves
            <br /> develop faster, secured and distributed scripts. your code
            inse
          </Trls>
          <div className={classes.controls}>
            <Button variant={"contained"}>Get started</Button>
            <Button>How it works</Button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

Hero.propTypes = {
  variant: PropTypes.oneOf(["compact"]),
};

export default Hero;
