import color from "color";

const styles = {
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap')",
  "@global": {
    body: `
      color: "green",
      // min-height: 100%;
      font-family: 'Quicksand', sans-serif;
      font-size: 16px;
      // line-height: 1.5;
      color: #34373f;
      text-rendering: optimizeSpeed;
    `,
    h2: `
      font-size: 2rem
    `,
    h3: `
      font-size: 1.5rem
    `,
  },
};

export default styles;
