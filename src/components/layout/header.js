import React from 'react'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import { useMediaQuery } from 'react-responsive';
import { Form, Offcanvas } from 'react-bootstrap';
import { AiFillSetting } from 'react-icons/ai';

const Header = ({ name }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const expand = isMobile ? 'sm' : 'lg'
  
  if (!isMobile) {
    return (
      <header>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
          <Container fluid>
            <Navbar.Brand href="#home"><Image className='logo-size' src='https://www.bamdad.co/mag/wp-content/uploads/2023/03/logo-bamdad.png' /></Navbar.Brand>
            <Nav.Link href="#home">{`${name} عزیز، خوش آمدید`}</Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="d-flex justify-content-start w-100" dir='ltr'>
                <NavDropdown title={<AiFillSetting />} id="collasible-nav-dropdown">
                  <NavDropdown.Item className='text-end' href="#action/3.1">کلاس های من</NavDropdown.Item>
                  <NavDropdown.Item className='text-end' href="#action/3.3">جلسات من</NavDropdown.Item>
                  <NavDropdown.Item className='text-end' href="#action/3.3">گواهینامه های من</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='text-end' href="#action/3.4">گزارش های مالی دوره</NavDropdown.Item>
                  <NavDropdown.Item className='text-end' href="#action/3.4">افزایش اعتبار و انتقال</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='text-end' href="#action/3.4">معرفی به دوستان</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='text-end' href="#action/3.4">ویرایش</NavDropdown.Item>
                  <NavDropdown.Item className='text-end' href="#action/3.4">خروج</NavDropdown.Item>
                </NavDropdown>
                <Form.Select size='sm' style={{ width: '200px' }}>
                  <option>آمورشگاه خود را انتخاب کنید.</option>
                  <option>دانش و فناوری بامداد</option>
                </Form.Select>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
  else {
    return (
      <header>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container fluid>
            <Navbar.Brand href="#home"><Image className='logo-size' src='https://www.bamdad.co/mag/wp-content/uploads/2023/03/logo-bamdad.png' /></Navbar.Brand>
            <Nav.Link href="#home">{`${name} عزیز، خوش آمدید`}</Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  امکانات
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form.Select size='sm'>
                  <option>آمورشگاه خود را انتخاب کنید.</option>
                  <option>دانش و فناوری بامداد</option>
                </Form.Select>
                <Nav.Link className='text-end' href="#action/3.1">کلاس های من</Nav.Link>
                <Nav.Link className='text-end' href="#action/3.3">جلسات من</Nav.Link>
                <Nav.Link className='text-end' href="#action/3.3">گواهینامه های من</Nav.Link>
                <hr />
                <Nav.Link className='text-end' href="#action/3.4">گزارش های مالی دوره</Nav.Link>
                <Nav.Link className='text-end' href="#action/3.4">افزایش اعتبار و انتقال</Nav.Link>
                <hr />
                <Nav.Link className='text-end' href="#action/3.4">معرفی به دوستان</Nav.Link>
                <hr />
                <Nav.Link className='text-end' href="#action/3.4">ویرایش</Nav.Link>
                <Nav.Link className='text-end' href="#action/3.4">خروج</Nav.Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    )
  }
}


export default Header
