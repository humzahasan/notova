import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ lightMode: true });

const ThemeProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(true);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
