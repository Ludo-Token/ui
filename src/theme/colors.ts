import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FFF",
  primaryBright: "#00acff",
  primaryDark: "#32CD32",
  secondary: "#e22829  ",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  title: "#FFFFFF",
  navBar: "#e22829  ",   
  sideBar: "#01992a  ",
  secondary: "#e22829  ",
  background: "#01992a  ",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#006517  ",
  text: "#FFF",
  textDisabled: "#666171",
  textSubtle: "#FFF",
  borderColor: "#524B63",
  card: "#028fd5 ",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },                                     // title: "#000000",
                                        // navBar: "#F5F5F5",
                                        // sideBar: "#F5F5F5",
                                        // background: "",
                                        // backgroundDisabled: "#E9EAEB",
                                        // contrast: "#191326",
                                        // invertedContrast: "#FFFFFF",
                                        // input: "linear-gradient(to right, #8360c3, #2ebf91)",
                                        // tertiary: "linear-gradient(to right, #ff8008, #ffc837)",
                                        // text: "#000",
                                        // textDisabled: "#BDC2C4",
                                        // textSubtle: "#000",
                                        // borderColor: "#E9EAEB",
                                        // card: "#FFFFFF",
                                        // gradients: {
                                        //   bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
                                        // },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  title: "#FFFFFF",
  navBar: "#27262c",
  sideBar: "#27262c",
  secondary: "#9A6AFF",
  background: "/images/dayback.png",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
