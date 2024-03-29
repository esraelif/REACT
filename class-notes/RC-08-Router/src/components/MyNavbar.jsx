import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../img/logo.png'
import { Link, NavLink } from "react-router-dom";

//!!!React ta 3 türlü link kullanılabilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmalısınız? React uygulamanız içinde, etkinken stil gerektirmeyen bir bağlantı oluşturmak istiyorsanız, Link bileşenini kullanın. React uygulamanız içinde, etkin durumdayken stil gerektiren bir bağlantı oluşturmak istiyorsanız, NavLink bileşenini kullanın. Son olarak, React uygulamanızda harici bir sayfaya veya rota olmayan bir sayfaya bağlantı oluşturmak istiyorsanız, <a></a>  etiketini kullanın.

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/"
              className="nav-link"
              style={({ isActive }) => (
                { color: isActive ? "red" : "" }
              )}>Home</NavLink>

            <NavLink style={({ isActive }) => (
              { fontSize: isActive ? "red" : "" }
            )} className="nav-link" to="/teacher">Teacher</NavLink>

            <NavLink style={({ isActive }) => (
              { color: isActive ? "red" : "" }
            )} className="nav-link" to="/courses">Courses</NavLink>

            <NavLink style={({ isActive }) => (
              { backgroundColor: isActive ? "aqua" : "" }
            )} className="nav-link" to="/contact">Contact</NavLink>
            <a href="https://github.com/esraelif" target='blank' className="nav-link" >GitHup</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar