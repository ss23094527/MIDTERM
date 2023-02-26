import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles/Headerstyle.css';
import '../pages/Home';
import Darklight from './darklightmode/Darklight';
import { Link } from 'react-router-dom';
import { NavbarBrand } from 'react-bootstrap';



function Header() {
  return (
    <>

      {['sm',].map((expand) => (

        <Navbar className="p-3 navbarr" key={expand} variant="dark" expand={expand} >
          <Container fluid>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="./public/images/logo.svg"
                width="0"
                height="0"
                className="d-inline-block align-top"
              />{' '}
             
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {/* 搜尋 */}
                {/* <Form className="d-flex navlink">

                  <Form.Control
                  
                    type="search"
                    placeholder="Search"
                    className="me-2 searchbar"
                    aria-label="Search"
                  />
                  <Button variant="outline-light me-2">Search</Button>
                </Form> */}

                <Nav className="justify-content-end flex-grow-1 pe-3  navlink">
                  <Nav.Link className='text-white' href="/Home">HOME</Nav.Link>
                  <Nav.Link href="/Aboutus">ABOUT US</Nav.Link>

                  {/* 下拉菜單 */}
                  <NavDropdown

                    title="TYPE"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">MUSIC</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      3D MODEL
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action5">
                      ART WORK
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/Aboutus">SHOP</Nav.Link>

                </Nav>

                <Nav className="me-3 gap-2 login">
                  <Nav.Link className="btn btn-outline-light text-white" href="#">LOGIN</Nav.Link>
                  <Nav.Link eventKey={2} className="btn btn-outline-light text-white " href="#">
                    SIGN UP
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;