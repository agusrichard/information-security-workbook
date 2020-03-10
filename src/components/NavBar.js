import React from 'react'
import {
  Navbar,
  Container,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav
} from 'reactstrap'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar color="dark" dark expand="md" className="mb-4">
        <Container>
          <NavbarBrand href="/">My Project</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem className="mr-auto">
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className="mr-auto">
              <NavLink href="#">News</NavLink>
            </NavItem>
            <NavItem className="mr-auto">
              <NavLink href="#">Contact</NavLink>
            </NavItem>
            <NavItem className="mr-auto">
              <NavLink href="#">About</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default NavBar