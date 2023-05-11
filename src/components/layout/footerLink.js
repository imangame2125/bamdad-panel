import { Row } from "react-bootstrap";

function FooterLink({title, link}) {
  return (
    <Row>
      <p className="text-end">
        <a href={link} className="text-white text-decoration-none">{title}</a>
      </p>
    </Row>
  )
}

export default FooterLink;