import React from "react";
import { Dropdown } from "react-bootstrap";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    className="text-decoration-none text-dark"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

function Settings() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            className="bi bi-three-dots rotate-90" viewBox="0 0 16 16">
            <path
              d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className="text-end" href="#/action-1">درخواست انصراف از دوره</Dropdown.Item>
          <Dropdown.Item className="text-end" href="#/action-2">ثبت انتقاد یا پیشنهاد</Dropdown.Item>
          <Dropdown.Item className="text-end" href="#/action-3">درخواست‌های ثبت‌شده</Dropdown.Item>
          <Dropdown.Item className="text-end" href="#/action-3">شرکت در نظرسنجی</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Settings;