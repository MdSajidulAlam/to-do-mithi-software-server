import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);



    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark" className='shadow-lg '>
            <Container>
                <NavLink to='/home' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Home</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        {user ? <button className='btn btn-link text-decoration-none text-dark' onClick={handleSignOut}>Sign Out</button> : <NavLink to='/login' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Login</NavLink>}
                    </Nav>
                    <Nav>
                        <NavLink to='/mytask' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >My Task</NavLink>
                        <NavLink to='/addtask' className={({ isActive }) => isActive ? "text-primary text-decoration-none m-3" : "text-dark text-decoration-none m-3"} >Add Task</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;