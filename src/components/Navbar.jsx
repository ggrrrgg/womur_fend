import { Container, Nav, Navbar } from 'react-bootstrap';
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom';


function Header() {

    return(
        <Navbar className='d-flex'
    sticky='top'>
      <Container fluid>
        <Nav>
          {/* navbar links */}
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          </Nav>
          </Container>

          </Navbar>
    )
}

export default Header