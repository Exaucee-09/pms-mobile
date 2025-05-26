import { DefaultTheme } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const theme = {
    ...DefaultTheme,
    Colors: {
        ...DefaultTheme.colors,
        primary: "#6200ee",
        accent: "#03dac4",
        background: "#f6f6f6",
        surface: "#ffffff",
        text: "#333333",
        error: '#B00020',
        success: '#4CAF50',
        warning: '#FFC107',
    },
    roundness: 8,
};