import { create as createJss } from "jss";
import { reset, typography } from "jss-reset";
import styles from "./styles";
import preset from "jss-preset-default";

const jss = createJss();

jss.setup(preset());
jss.createStyleSheet(reset).attach();
jss.createStyleSheet(styles).attach();

export default jss;
