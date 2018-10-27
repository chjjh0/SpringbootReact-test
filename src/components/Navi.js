import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import '../App';
import Logo from '../img/logo.jpg';


// ... other imports here

// const $ = window.jQuery

// ... other declarations here

class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>

        <Navbar color="faded" light>
        <Row>
          <Col>
          <NavbarBrand href="/" className="mr-auto">
          <img src={Logo} height="50" alt="logo"/>
          </NavbarBrand>
  
          
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          
            <Nav navbar>
              <NavItem>
                <NavLink exact to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/list">LIST</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/move">MovePageTest</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </Col>
          </Row>
        </Navbar>
        
      </div>
    ) // return end
  }
}
export default Navi