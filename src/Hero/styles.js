export default ({ mixins }) => ({
  hero: `
    min-height: 480px;
    z-index: 2;
    //
    text-align: center;
    color: #fff;
    width: 100%;
  `,
  text: `
    margin-top: 15vh;
    padding: 130px 0 80px 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    z-index: 2;
    max-width: 1000px;
    margin: auto;
    text-align: center;
  `,
  header: `
    color: #fff;
    font-weight: 200;
    font-style: normal;
    margin-bottom: 20px;
    position: relative;
    z-index: 2;
    text-shadow: 0 0 50px #041727;
  `,
  controls: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    "& > a": {
      margin: "0 5px ",
    },
  },
  // controls: `
  //   display: flex;
  //   flex-flow: row;
  //   justify-content: center;
  //   & > a {
  //     margin: 5px 0;
  //   }
  // `,
});
