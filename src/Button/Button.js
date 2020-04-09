import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Button = ({
  children,
  disabled,
  variant = "outlined",
  color = "primary",
  ...restProps
}) => {
  const classes = useStyles(restProps);

  return (
    <a
      className={clsx(classes.button, classes[variant], classes[color], {
        [classes.disabled]: disabled,
      })}
      {...restProps}
    >
      {children}
    </a>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["outlined", "contained"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
