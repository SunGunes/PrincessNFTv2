import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/Logo.png";
import "./NavbarComponent.css";
import { PopupButton } from "@typeform/embed-react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function NavbarComponent() {
  return (
    <div className="NavbarComponent">
      <Navbar
        style={{ borderBottom: "4px solid rgb(197, 0, 250)" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/watchlist">Ready To Mint</Nav.Link>
            <PopupButton
              id="r45SyLnE"
              style={{ background: "none", color: "white", border: "none" }}
              className="my-button"
            >
              Create WL
            </PopupButton>
            <Nav.Link href="/watchlist">Watchlist</Nav.Link>

            <DropdownButton
              id="dropdown-basic-button"
              title="Projects Per Chain"
              variant="dark"
            >
              <Dropdown.Item href="#/action-1">Chain 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Chain 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Chain 3</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
