import Navbar from "./Navbar";
import MainBody from "./MainBody";
import ContextProvider from "./context/ContextProvider";
import { MainContext } from "./context/MainContext";
import { useContext } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

const MainPage = () => {
  const { theme } = useContext(MainContext);
  return (
    <div className={theme}>
      <Navbar />
      <MainBody />
      <p className="note note1">
        Note : The Toggle theme button is in developement...
      </p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ContextProvider>
          <MainPage />
        </ContextProvider>
      </div>
    </BrowserRouter>
  );
};

export default App;
