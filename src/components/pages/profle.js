import React from 'react'
import Layout from '../layout'
import Course from '../course'
import { Container, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { BsSearch } from "react-icons/bs";

function ProfileDetail({ children }) {
  return (
    <Row>
      <Col sm className='text-center p-2'>
        {children}
      </Col>
    </Row>
  )
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('fa-IR',
    {
      style: 'currency',
      currency: 'IRR',
    })
    .formatToParts(amount)
    .map(({ type, value }) => {
      switch (type) {
        case "currency":
          return '';
        default:
          return value;
      }
    })
    .reduce((str, pt) => str + pt) + 'ریال';
}

const Profile = ({ name, phoneNumber, nationalNumber, credit, learningCredit, courses }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredCourses = courses.filter((course) => {
    return course.productName.toLowerCase().includes(searchTerm.toLowerCase())
  });

  let formattedCredit = formatCurrency(credit)
  let formattedLearningCredit = formatCurrency(learningCredit)

  return (
    <Layout>
      <Container fluid className='py-3'>
        <Row>
          <Col sm={12} md={3}>
            <Row>
              <Col sm className='d-flex justify-content-center align-items-center p-5 pb-3'>
                <Image src="https://via.placeholder.com/150" roundedCircle />
              </Col>
            </Row>
            <ProfileDetail><h2>{name}</h2></ProfileDetail>
            <ProfileDetail><h3>کد ملی:{nationalNumber} </h3></ProfileDetail>
            <ProfileDetail><h3>تلفن: {phoneNumber}</h3></ProfileDetail>
            <ProfileDetail><h3>اعتبار: <span>{formattedCredit}</span></h3></ProfileDetail>
            <ProfileDetail><h3>اعتبار آموزشی: <span>{formattedLearningCredit}</span></h3></ProfileDetail>
          </Col>
          <Col sm={12} md={9}>
            <InputGroup className="mb-2">
              <Form.Control
                placeholder="جستجو"
                aria-label="جستجو"
                aria-describedby="basic-addon1"
                className='rounded-left'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroup.Text id="basic-addon1" className='rounded-right'>
                <BsSearch />
              </InputGroup.Text>
            </InputGroup>
            {filteredCourses.map((course) => {
              return (
                <Course
                  key={course.productId}
                  title={course.productName}
                  teacherName={`${course.teacherFName} ${course.teacherLName}`}
                  score={course.grade}
                  sessionsCount={course.sessionsCount}
                  startDate={course.startdate}
                  type={course.sellType}
                  time={course.hour}
                />
              )
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Profile
