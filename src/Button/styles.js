export default ({ mixins, color }) => ({
  button: `
    min-width: 150px;
    position: relative;
    padding: 15px 20px 13px;
    color: #fff;
    line-height: 1;

    border-width: 2px;
    border-style: solid;
    padding-top: 8px;
    padding-bottom: 8px;

    display: inline-block;
    border: none;
    border-radius: 3px;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    cursor: pointer;
    transition-delay: 0;
    transition-duration: .3s;
    transition-timing-function: ease-in;
    transition-property: background,border-color;
    user-select: none;
    appearance: none;

    text-decoration: none;
  `,
  outlined: `
    color: ${color.primary};
    border-color: ${color.primary};
  `,
  contained: `
    background-color: ${color.primary};
    border-color: ${color.primary};
  `,
  disabled: `
    color: #efefef;
    border-color: #efefef;
  `,
});
