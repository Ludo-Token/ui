import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primary,
    backgroundActive: lightColors.primaryDark,
    backgroundHover: lightColors.primaryBright,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    color: "#e42827",
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: `2px solid ${lightColors.primary}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    boxShadowActive: "none",
    color: lightColors.secondary,
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    boxShadowActive: "none",
    color: lightColors.secondary,
  },
  [TEXT]: {
    background: "#ffce31 ",
    backgroundActive: "transparent",
    backgroundHover:  "#ffce31", //  lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    boxShadowActive: "none",
    color: "#015914",
  },
  [DANGER]: {
    background: "#FFF",
    backgroundActive: "#e42827", // darkten 10%
    backgroundHover: "#e42827", // lighten 10%
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    boxShadowActive: "none",
    color: "#015914",
  },
  [SUBTLE]: {
    background: "#009a2a",
    backgroundActive: `${lightColors.textSubtle}D9`, // 70% opacity
    backgroundHover:     `${lightColors.textSubtle}B3`, // 85% opacity
    border: "2px solid #FFF" ,
    borderColorHover: "currentColor",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
  [SUCCESS]: {
    ...light.success,
  },
};
