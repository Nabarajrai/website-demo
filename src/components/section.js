import React from "react";
import { Container } from "reactstrap";

const section = ({ children, className = "", container = true, ...rest }) => {
  return (
    <div className={`section ${className}`} {...rest}>
      {container ? <Container>{children}</Container> : children}
    </div>
  );
};

export default section;
