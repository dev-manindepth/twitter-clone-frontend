import React, { ReactNode, createContext, useState } from "react";
type Theme = "dark" | "light";
interface IThemeProviderProps {
  children: ReactNode;
}
interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
export const ThemeContext = createContext<IThemeContext>({
  theme: "dark",
  setTheme: (theme: Theme) => {},
});
const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const contextValues: IThemeContext = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
