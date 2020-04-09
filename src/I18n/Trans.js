import React from "react";
import PropTypes from "prop-types";
import { useI18n } from "../../node_modules/@k14v/react-i18njs";

const parse = (value, i18n) => {
  if (typeof children === "string") {
    return value;
  }

  if (typeof children === "function") {
    return value(i18n);
  }

  return null;
};

const Trans = ({ component: C, children, ...restProps }) => {
  const i18n = useI18n();
  const value = i18n.trls.__(parse(children, i18n));

  if (C) {
    return <C {...restProps}>{value || children}</C>;
  }

  return value;
};

Trans.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export const createTrans = (defaults) => (props) => {
  return <Trans {...defaults} {...props}></Trans>;
};

export default Trans;
