import React, { useState } from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Logo.png";
import "../styles/Header.css";

function Header({ searchQuery = "", onSearch = () => {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`navbar-wrapper ${isMenuOpen ? "menu-open" : ""}`}>
      <Navbar
        expand="lg"
        sticky="top"
        className="custom-navbar shadow-sm px-3"
        onToggle={(expanded) => setIsMenuOpen(expanded)}
      >
        <Container fluid className="d-flex align-items-center justify-content-between">
          {/* ===== LOGO ===== */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src={Logo} alt="Logo" className="header-logo me-2" />
          </Navbar.Brand>

          {/* ===== BURGER MENU ===== */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* ===== MENU ===== */}
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav className="align-items-center gap-3 me-4">
              <NavLink to="/notfound" className="nav-link link-animate">
                🧱 Bâtiment
              </NavLink>
              <NavLink to="/notfound" className="nav-link link-animate">
                ⚙️ Fabrication
              </NavLink>
              <NavLink to="/notfound" className="nav-link link-animate">
                💼 Services
              </NavLink>
            </Nav>

            {/* ===== SEARCH BAR ===== */}
            <Form className="d-flex search-bar" onSubmit={(e) => e.preventDefault()}>
              <Form.Control
                type="search"
                placeholder="Rechercher un artisan..."
                className="me-2 search-input"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
              />
              <Button variant="outline-light" className="search-btn">
                🔍
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
