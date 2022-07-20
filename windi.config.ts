import { defineConfig } from "windicss/helpers";

// color palette: https://colorhunt.co/palette/2c36393f4e4fa27b5cdcd7c9
export default defineConfig({
  extract: {
    include: ["**/*.{tsx,css}"],
    exclude: ["node_modules", ".git", ".next/**/*"],
  },
  theme: {
    extend: {
      colors: {
        back: "rgb(220, 215, 201)",
        acc: "rgb(162, 123, 92)",
        dim: "rgb(63, 78, 79)",
        dark: "rgb(44, 54, 57)",
      },
    },
  },
});
