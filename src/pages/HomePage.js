import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div>
      <h2>Helllow I am Home page !</h2>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
};

export default HomePage;
