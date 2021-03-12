import React from "react";
import "./Style.css";
import Card from "src/Component/UI/Card";
import Logo from "src/Component/Logo";

const Header = (props) => {
  return (
    <div>
      <Card>
        <Logo />
      </Card>
    </div>
  );
};

export default Header;
