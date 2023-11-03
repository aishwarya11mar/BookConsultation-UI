import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import Header from "./common/header/Header";

const App = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //  }
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Router>
      <Header openModal={openModal} />
      <Home/>
      <Login
        modalIsOpen={modalIsOpen}
        onChangesAfterOpenModal={afterOpenModal}
        onChangeCloseModal={closeModal}
        subtitle={subtitle}
      />
    </Router>
  );
};

export default App;
