import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styles from './navbar.module.scss'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
        <nav>
            <div className={styles.navbar}>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/" className="mr-auto">Logo</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                  <Nav navbar>
                    <NavItem>
                  <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  WOMEN EMPOWERMENT
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    SELF CARE
                  </DropdownItem>
                  <DropdownItem>
                    NATURAL HAIR CARE
                  </DropdownItem>
                  <DropdownItem/>
                  <DropdownItem>
                    GO GETTERS
                  </DropdownItem>
                  <DropdownItem>
                    EDUCATION
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  CULTURE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    AFRICAN
                  </DropdownItem>
                  <DropdownItem>
                    AMERICAN
                  </DropdownItem>
                  <DropdownItem>
                    SOUTH AMERICA
                  </DropdownItem>
                  <DropdownItem>
                    CARIBBEAN ISLANDS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SHOP
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    CLOTHES
                  </DropdownItem>
                  <DropdownItem>
                    SHOES
                  </DropdownItem>
                  <DropdownItem />
                  <DropdownItem>
                    IMAGES
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
              </Collapse>
            </Navbar>
            </div>
          <div className={styles.widenav}>
           <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                  <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  WOMEN EMPOWERMENT
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    SELF CARE
                  </DropdownItem>
                  <DropdownItem>
                    NATURAL HAIR CARE
                  </DropdownItem>
                  <DropdownItem>
                    GO GETTERS
                  </DropdownItem>
                  <DropdownItem>
                    EDUCATION
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  CULTURE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    AFRICAN
                  </DropdownItem>
                  <DropdownItem>
                    AMERICAN
                  </DropdownItem>
                  <DropdownItem>
                    SOUTH AMERICA
                  </DropdownItem>
                  <DropdownItem>
                    CARIBBEAN ISLANDS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SHOP
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    CLOTHES
                  </DropdownItem>
                  <DropdownItem>
                    SHOES
                  </DropdownItem>
                  <DropdownItem />
                  <DropdownItem>
                    IMAGES
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>

          </Collapse>
        </Navbar>
          </div>
        </nav>
    );
  }
}