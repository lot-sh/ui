const createMixins = () => ({
  unstyledList: (root, item) => ({
    "&": {
      margin: 0,
      paddingLeft: 0,
      ...root,
      "& li": {
        backgroundColor: "transparent",
        textShadow: "0 0 10px #041727",
        display: "inline-block",
        listStyle: "none",
        padding: "15px",
        ...item,
      },
    },
  }),
});

export default createMixins;
