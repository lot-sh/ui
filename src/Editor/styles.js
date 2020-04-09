import { createUseStyles } from "react-jss";

export const styles = {
  editor: `
    flex: 1 1 auto;
    margin-top: 0;
    height: 100%;
    position: relative;
 `,
};

const useStyles = createUseStyles(styles);

export default useStyles;
