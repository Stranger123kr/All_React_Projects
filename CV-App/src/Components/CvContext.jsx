import { createContext, useContext, useEffect, useState } from "react";
import API from "../Data/Data.json";

const CvContext = createContext();
const ThemeContext = createContext();

const CvProvider = ({ children }) => {
  // ------------------------------------------------------------------
  const [cvData, setCvData] = useState(API);
  const [counter, setCounter] = useState(1);
  // -------------------------------------

  const CvData = async (url) => {
    setCvData(url);
  };

  // -------------------------------------

  const MoreCandidateData = () => {
    setCounter(counter + 1);
  };

  // -------------------------------------

  if (cvData.length + 1 <= counter) {
    setCounter(1);
  }

  // -------------------------------------

  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") === null
      ? "light"
      : localStorage.getItem("theme")
  );

  //------------------- this is predefine value of chekiang theme ----------------

  if (themeMode !== "light") {
    localStorage.setItem("theme", "dark");
    document.body.classList.add("Dark");
  } else {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("Dark");
  }

  //------------------- this is onclick value of chekiang theme ----------------

  const ThemeChange = () => {
    if (themeMode !== "light") {
      document.body.classList.remove("Dark");
      setThemeMode("light");
    } else {
      document.body.classList.add("Dark");
      setThemeMode("dark");
    }
  };

  // -------------------------------------

  useEffect(() => {
    CvData(API);
  }, []);

  // ------------------------------------------------------------------

  return (
    <CvContext.Provider value={[MoreCandidateData, cvData, counter]}>
      <ThemeContext.Provider value={{ themeMode, ThemeChange }}>
        {children}
      </ThemeContext.Provider>
    </CvContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(CvContext);
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { CvContext, CvProvider, useGlobalContext, useThemeContext };
