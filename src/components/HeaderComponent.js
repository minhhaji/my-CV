import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink} from 'reactstrap';

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render(){
    return(
    <Navbar dark expand='md bg-dark' className='fixed-top'>
        <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className='mr-auto' href="/"> MDV 
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink target="blank" href="https://www.facebook.com/minhkyuuby"><i class="fa fa-facebook-f"> Facebook</i></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="mailto:minhkyuuby@gmail.com"><i class="fa fa-envelope-open"> Gmail</i></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://plus.google.com/u/1/113978489801622078294?pageId=none"><i class="fa fa-google-plus"> Google+</i></NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
        </div>
    </Navbar>
    )}
}
export default Head