import React from "react";
import jss from "./jss";
import createMixins from "./createMixins";
import { JssProvider, ThemeProvider } from "react-jss";

const myTheme = {
  color: {
    primary: "#7d46ce",
  },
  mixins: createMixins(),
};

const createGenerateId = () => {
  let counter = 0;
  if (process.env.NODE_ENV === "production") {
    return () => btoa(counter);
  }

  return (rule) => `${rule.key}-${counter++}`;
};

const generateId = createGenerateId();

const Theme = ({ children }) => {
  return (
    <JssProvider generateId={generateId} jss={jss}>
      <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
    </JssProvider>
  );
};

export default Theme;
