import React, { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../utils/cookiesUtils";

interface Props {
  children: React.ReactNode;
}

interface Context {
  isDarkTheme: Boolean;
  toogleTheme: () => void;
}

const initialValue: Context = {
  isDarkTheme: false,
  toogleTheme: () => {},
};

export const ThemeContext = createContext<Context>(initialValue);

const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialValue.isDarkTheme);

  const toogleTheme = () => {
    setCookie("isDarkTheme", !isDarkTheme, 365);
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (!getCookie("isDarkTheme")) {
      setCookie("isDarkTheme", false, 365);
    } else {
      setIsDarkTheme(getCookie("isDarkTheme") === "true");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toogleTheme }}>
      <div className={isDarkTheme ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
