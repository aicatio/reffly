declare module '@mui/material/styles' {
    interface Theme {
        [key: string]: any;
    }
    interface ThemeOptions {
        [key: string]: any;
    }
    interface PaletteOptions {
        [key: string]: any;
    }
}
export declare const refflyTheme: {
    palette: {
        primary: {
            main: "#1565c0";
        };
        secondary: {
            main: "#424242";
        };
        tertiary: {
            main: "#ff9800";
            dark: "#e65100";
            light: "#ffcc80";
        };
        refflyplus: {
            primary: "#4caf50";
            secondary: "#424242";
            tertiary: "#1b5e20";
        };
        background: {
            default: string;
            paper: "#f5f5f5";
        };
    };
    typography: {
        h6: {
            fontSize: string;
        };
        h5: {
            fontSize: string;
        };
        h4: {
            fontSize: string;
        };
        h3: {
            fontSize: string;
        };
        h2: {
            fontSize: string;
        };
        h1: {
            fontSize: string;
        };
    };
    overrides: {
        MuiButton: {
            raisedPrimary: {
                textColor: string;
                color: string;
            };
            raisedSecondary: {
                textColor: string;
                color: string;
            };
        };
    };
};
export declare const defaultTheme: import("@mui/material/styles").Theme;
