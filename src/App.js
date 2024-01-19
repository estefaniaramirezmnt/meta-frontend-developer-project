import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./style/App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
