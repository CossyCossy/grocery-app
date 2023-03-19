import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    black: '#102A68',
    red: '#FF5733',
    orange: '#FFAC1C',
    white: '#FFFFFF',
    gray: "#DCDCDC",
    gray_2: "gray",
}

export const SIZES = {
    width,
    height,
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
};

export const FONTS = {
    boldFont: {fontFamily: "Poppins-Bold"},
    semiBoldFont:{fontFamily: "Poppins-SemiBold"},
    regularFont:{fontFamily: "Poppins-Regular"},
    thinFont:{fontFamily: "Poppins-Thin"},
    lightFont:{fontFamily: "Poppins-Light"},
    extraLightFont:{fontFamily: "Poppins-ExtraLight"},
};

const theme = {
    COLORS,
    SIZES,
    FONTS
}

export default theme