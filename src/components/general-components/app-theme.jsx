import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { inputsCustomizations } from "./customization/inputs";
import { dataDisplayCustomizations } from "./customization/data-display";
import { feedbackCustomizations } from "./customization/feedback";
import { navigationCustomizations } from "./customization/navigation";
import { surfacesCustomizations } from "./customization/surfaces";
import {
  colorSchemes,
  typography,
  shadows,
  shape,
} from "./customization/theme-primitives";
import { Fragment, useMemo } from "react";

function AppTheme(props) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          cssVariables: {
            colorSchemeSelector: "data-mui-color-scheme",
            cssVarPrefix: "template",
          },
          colorSchemes,
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <Fragment>{children}</Fragment>;
  }
  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}

AppTheme.propTypes = {
  children: PropTypes.node,
  disableCustomTheme: PropTypes.bool,
  themeComponents: PropTypes.object,
};

export default AppTheme;
