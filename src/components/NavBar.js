import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo.png';

const NavBar = () => (
  <Navbar bg="light" expand="lg" className="mx-5">
    <Navbar.Brand href="">
      <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
      {' '}
      Space Travelers&apos; Hub
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
      <Nav>
        <Nav.Link>
          {' '}
          <NavLink
            exact
            to="/"
            className="text-decoration-none text-dark"
            activeClassName="text-decoration-underline"
          >
            <span className="mr-5">Rockets</span>
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink
            exact
            to="/Mission"
            className="text-decoration-none text-dark"
            activeClassName="text-decoration-underline"
          >
            Mission
          </NavLink>
        </Nav.Link>
        <Nav.Link>
          <NavLink
            exact
            to="/MyProfile"
            className="text-decoration-none text-dark"
            activeClassName="text-decoration-underline"
          >
            My Profile
          </NavLink>
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
