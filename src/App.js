import { useEffect, useState } from 'react';
import Profile from './components/pages/profle';
import mockData from './data.json'
import './styles.css'

function App() {

  const [courses, setCourses] = useState(mockData.data);
  
  useEffect(() => {
    document.title = 'پروفایل کاربری'
  }, []);

  // useEffect(() => {
  //   document.cookie = `ASP.NET_SessionId=z0v3fycu0ewbnvdz3ou20531; path=/; Domain=tms.bamdad.co; SameSite=None; Secure`
  //   document.cookie = `bamdadCookie=ZZHWDL7cgf4DwxgotnefTcqFz2n131yRDxsHS9g-EVZMtbhMMVk9ubgqRQHwwKUAjf44IYYRHEi5ukjlqRsCGubEg2V7e0nsB4b-n9vmzCOL4XqD_XZHj3ICIEkvwkWFtRqs7pYJNH8MniFv24rSU6V6bYyHVSjwliIQTIZYh2xzBs57tbuOVI5cRNTv-1q-TEw_e_7lQ4490TuxhZHToL8JJQ2CiG0IYAaucTDpzs2oQKr1exQRdrC42jdx0zaJIt4KokrPEND8PHgwdOlrVjc5yQKI_fJqiXnH2Zcia2AoVNJwcOpPyzaSbVK2FY9xlUPKRuvIeXM9d9SsBIQKFJKOyeANy0JH7KO7nKRb6FXM2dGQ5d_pYJGQZaDCqtSBqE40_kM2VUFwrhp4kHXpRjs62teHwjz9uShzyhhPZnB94-cJ-ehoP3hevsXVJ5xb8FzgIA; path=/; Domain=tms.bamdad.co; SameSite=None; Secure`
  //   fetch('https://tms.bamdad.co/api/UserProduct/UserCourses', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  //     },
  //     body: {
  //       'status': '0',
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(res => {
  //     setCourses(res.data)
  //   });
  // }, []);


  return (
    <Profile
      nationalNumber='0016139127'
      phoneNumber='09127187925'
      learningCredit='0'
      credit='30225000'
      name='ایمان مجدآبادی فراهانی'
      courses={courses}
    />
  );
}

export default App;
