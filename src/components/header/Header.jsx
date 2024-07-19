import React from "react";
import Nav from "react-bootstrap/Nav";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Nav className="nav-bar justify-content-center " activeKey="/home">
        <Nav.Item className=" my-2 ">
          <Nav.Link className="font-fmly" href="#home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className=" my-2 ">
          <Nav.Link className="font-fmly" href="#about">
            Hogwarts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-2 ">
          <Nav.Link className="font-fmly" href="#spells">
            Spell
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="my-2 ">
          <Nav.Link className="font-fmly" href="#contacts">
            Contacts
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Header;
