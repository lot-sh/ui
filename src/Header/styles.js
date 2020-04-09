export default ({ mixins }) => ({
  header: {
    background: "linear-gradient(to bottom,#1f0a27 0,#642367 100%);",
    paddingTop: "20px",
    position: "relative",
    marginBottom: "60px",
    overflow: "hidden",
    //
    height: "100vh",
    minHeight: "550px",
    maxHeight: "1300px",
  },
  container: {
    display: "flex",
    flexFlow: "row",
    margin: "auto",
    justifyContent: "space-between",
    "@media screen and (min-width: 901px)": {
      "&": {
        maxWidth: "1000px",
      },
    },
  },
  navigation: {
    backgroundColor: "transparent",
    textShadow: "0 0 10px #041727",
    position: "relative",
    zIndex: "10",
    marginBottom: 0,
    fontWeight: 200,
    fontStyle: "normal",
    fontSize: "16px",
    "& a": {
      textDecoration: "none",
      color: "white",
    },
    "& ul": mixins.unstyledList(),
  },
});
