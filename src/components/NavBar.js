import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import iconNav from "../images/brand.png";

const NavBarCollapse = (props) => {
  return (
    <div>
      <Navbar
        className="navbar-dark bg-dark"
        light
        style={{ marginBottom: "10px"}}
      >
        <Nav className="mr-auto" navbar style={{ minHeight: '60px'}}>
          <NavItem>
            <NavLink style={{position: 'absolute', left: '50%', transform: 'translatex(-50%)'}}>
              <Link
                to="/home"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <img src={iconNav} className="img-fluid mx-auto d-block" style={{maxHeight: '50px'}} alt=""></img>
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBarCollapse;
