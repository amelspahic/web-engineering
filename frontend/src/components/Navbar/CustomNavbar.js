import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';

const CustomNavbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={Link} to="/">Web Engineering</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/books">Books</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/authors">Authors</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>v1.0</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar;