import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FooterTitle from './footerTitle'
import FooterParagraph from './footerParagraph'
import FooterLink from './footerLink'
import { HiOutlineMail } from 'react-icons/hi'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'

import config from '../../config'

const Footer = () => {

  return (
    <footer className="text-lg-start text-color">
      <Container className='text-md-start'>
        <Row className='mt-3'>
          <Col md={3} lg={4} xl={3} className='pt-4 mx-auto'>
            <FooterParagraph>
              {config.company.aboutUs}
            </FooterParagraph>
          </Col>
          <Col md={3} lg={2} xl={2} className='p-4 mx-auto'>
            <FooterTitle>لینک های کاربردی</FooterTitle>
            {config.footer.links.map((link, index) => (
              <FooterLink key={index} title={link.title} link={link.link} />
            ))}
          </Col>
          <Col md={4} lg={3} xl={3} className='mb-md-0 pt-4 mx-auto'>
            <FooterTitle>راهای ارتباطی</FooterTitle>
            <Row>
              <FooterParagraph>
                <IoLocationOutline className='me-1' />
                {config.company.address}
              </FooterParagraph>

            </Row>
            <Row>
              <FooterParagraph><HiOutlineMail className='me-1' />
                <a href={`mailto:${config.company.email}`} className='text-white text-decoration-none'>{config.company.email}</a>
              </FooterParagraph>
            </Row>
            <Row>
              <FooterParagraph><FaPhoneAlt className='me-1' />{config.company.phone}</FooterParagraph>
            </Row>
          </Col>
        </Row>
      </Container>
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          <p className="text-center p-3 m-0">
            ٢٠١٩ © کلیه حقوق این سامانه متعلق به شرکت دانش و فناوری بامداد است.
          </p>
        </div>
    </footer>
  )
}

export default Footer
