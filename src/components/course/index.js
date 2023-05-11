import { Row, Col, Card, Button } from 'react-bootstrap'
import Settings from './settings';
import CourseDetail from './courseDetail';

function Course({ title, teacherName, score, sessionsCount, startDate, type, time }) {
  let typeString = null;
  if (type === 1) {
    typeString = 'دوره'
  } else if (type === 2) {
    typeString = 'دوره با تخفیف'
  }
  return (
    <Card className='course-card mt-2' data-title={title}>
      <Card.Body>
        <Col sm={12} md={12} className='d-flex justify-content-between pr-0 pl-0'>
          <Card.Title>{title}</Card.Title>
          <Settings />
        </Col>
        <h6 className="card-subtitle mb-2 text-muted p-3">{teacherName}</h6>
        <Row className='p-2 mb-2'>
          <Col sm={2}>
            <CourseDetail value={<span className="badge bg-primary">{typeString}</span>} />
          </Col>
          <Col sm={2}>
            <CourseDetail title='تاریخ شروع' value={startDate ? startDate : 'ثبت نشده'} />
          </Col>
          <Col sm={2}>
            <CourseDetail title='ساعت' value={time} />
          </Col>
          <Col sm={3}>
            <CourseDetail title='تعداد جلسات خریداری شده' value={sessionsCount} />
          </Col>
          <Col sm={3}>
            <CourseDetail title='نمره' value={score} />
          </Col>
        </Row>
        <Card.Link href="#">
          <Button>لیست جلسات</Button>
        </Card.Link>
        <Card.Link href="#">
          <Button variant='secondary'>آزمون‌ها</Button>
        </Card.Link>
        <Card.Link href="#">
          <Button variant='warning'>نظرسنجی</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Course