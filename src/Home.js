import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home(props) {

  let link = '';
  if (props.course + props.year + props.stream === 'BTech1CSE') { link = 'https://uktech.ac.in/newsletter/Syllabus/New-Syllabus-2022/B-Tech/BTECH_SYLLABUS.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech1ECE') { link = 'https://uktech.ac.in/newsletter/Syllabus/New-Syllabus-2022/B-Tech/BTECH_SYLLABUS.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech2CSE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301231218141006B-Tech-II-Year-CSE-Syllabus-2019-20.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech2ECE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301231217327552B-Tech-II-Year-ECE-Syllabus-2019-20.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech3CSE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301241823077911CSE2020.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech3ECE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301241823581993EC2020.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech4CSE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301241823077911CSE2020.pdf'; }
  else if (props.course + props.year + props.stream === 'BTech4ECE') { link = 'https://uktech.ac.in/site/writereaddata/siteContent/202301241823581993EC2020.pdf'; }
  else if (props.course + props.year + props.stream === 'MCA1') { link = 'https://uktech.ac.in/newsletter/Syllabus/New-Syllabus-2022/MCA/MCA-SYLLABUS.pdf'; }
  else if (props.course + props.year + props.stream === 'MCA2') { link = 'https://uktech.ac.in/newsletter/Syllabus/New-Syllabus-2022/MCA/MCA-SYLLABUS.pdf'; }

  return (
    <div className="page" id="home">
      <div className="home-background"></div>
      <div className='blur dark'></div>
      <div className="jumbotron">
        <div className="container intro">
          <h1 className="display-3 main-heading"> Hello, {props.name.substring(0, props.name.indexOf(' '))}</h1>
          <p>Let's begin your journey!
            Here you can access all your daily schedules be it lecture, mess and various other timing,
            Hop on and enjoy these handy features...</p>
        </div>
      </div>

      <div>
        <div className="row">

          <a href={link} target="_blank" rel="noreferrer" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="0">
            <div className="card wallet col-md-4">
              <div className="overlay"></div>
              <div className="circle">
                <div className="home-img"><img src='https://github.com/vaishprakhar19/student_portal/blob/main/resources/syllabus.jpg?raw=true' alt='syl'/></div>
                <defs></defs>
                <g transform="translate(23.000000, 29.500000)" fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="icon">
                  <rect rx="4.70247832" height="21.8788565" width="9.40495664" y="26.0333433" x="67.8357511" fill="#AC8BE9" id="Rectangle-3"></rect>
                  <rect rx="4.70247832" height="10.962961" width="9.40495664" y="38.776399" x="67.8357511" fill="#6A5297" id="Rectangle-3"></rect>
                  <polygon points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605" fill="#6A5297" id="Rectangle-2">
                  </polygon>
                  <path fill="#8B6FC0" id="Rectangle" d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"></path>
                  <path fill="#F6F1FF" id="Fill-12" d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"></path>
                  <rect height="12.863158" width="15.6082259" y="26.1162588" x="58.0305835" fill="#AC8BE9" id="Rectangle-4"></rect>
                  <ellipse ry="2.23319575" rx="2.20116007" cy="33.0919007" cx="65.8346965" fill="#FFFFFF" id="Oval">
                  </ellipse>
                </g>
              </div>
              <p>Syllabus</p>
            </div>
          </a>

          <Link to={'/tt' + props.course + props.year + props.stream} data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="300">
            <div className="card wallet col-md-4">
              <div className="overlay"></div>
              <div className="circle">
                <div className="home-img"><img src='https://github.com/vaishprakhar19/student_portal/blob/main/resources/timetable.jpg?raw=true' alt='tt'/></div>
                <defs></defs>
                <g transform="translate(23.000000, 29.500000)" fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="icon">
                  <rect rx="4.70247832" height="21.8788565" width="9.40495664" y="26.0333433" x="67.8357511" fill="#AC8BE9" id="Rectangle-3"></rect>
                  <rect rx="4.70247832" height="10.962961" width="9.40495664" y="38.776399" x="67.8357511" fill="#6A5297" id="Rectangle-3"></rect>
                  <polygon points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605" fill="#6A5297" id="Rectangle-2">
                  </polygon>
                  <path fill="#8B6FC0" id="Rectangle" d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"></path>
                  <path fill="#F6F1FF" id="Fill-12" d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"></path>
                  <rect height="12.863158" width="15.6082259" y="26.1162588" x="58.0305835" fill="#AC8BE9" id="Rectangle-4"></rect>
                  <ellipse ry="2.23319575" rx="2.20116007" cy="33.0919007" cx="65.8346965" fill="#FFFFFF" id="Oval">
                  </ellipse>
                </g>

              </div>
              <p>Time Table</p>
            </div>
          </Link>

          <div className='home-items-cover' data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="600">
            <Link to='/messtime'>
              <div className="card wallet col-md-4" hidden={props.daysch}>
                <div className="overlay"></div>
                <div className="circle">
                  <div className="home-img"><img src='https://github.com/vaishprakhar19/student_portal/blob/main/resources/messtime.jpg?raw=true' alt='ms'/></div>
                  <defs></defs>
                  <g transform="translate(23.000000, 29.500000)" fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="icon">
                    <rect rx="4.70247832" height="21.8788565" width="9.40495664" y="26.0333433" x="67.8357511" fill="#AC8BE9" id="Rectangle-3"></rect>
                    <rect rx="4.70247832" height="10.962961" width="9.40495664" y="38.776399" x="67.8357511" fill="#6A5297" id="Rectangle-3"></rect>
                    <polygon points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605" fill="#6A5297" id="Rectangle-2">
                    </polygon>
                    <path fill="#8B6FC0" id="Rectangle" d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"></path>
                    <path fill="#F6F1FF" id="Fill-12" d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"></path>
                    <rect height="12.863158" width="15.6082259" y="26.1162588" x="58.0305835" fill="#AC8BE9" id="Rectangle-4"></rect>
                    <ellipse ry="2.23319575" rx="2.20116007" cy="33.0919007" cx="65.8346965" fill="#FFFFFF" id="Oval">
                    </ellipse>
                  </g>
                </div>
                <p>Mess Schedule</p>
              </div>
            </Link>
          </div>

          <div className='home-items-cover' data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="0">
            <Link to='/messmenu'>
              <div className="card wallet col-md-4">
                <div className="overlay"></div>
                <div className="circle">
                  <div className="home-img"><img src='https://github.com/vaishprakhar19/student_portal/blob/main/resources/mess.jpg?raw=true' alt='mm'/></div>
                  <defs></defs>
                  <g transform="translate(23.000000, 29.500000)" fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="icon">
                    <rect rx="4.70247832" height="21.8788565" width="9.40495664" y="26.0333433" x="67.8357511" fill="#AC8BE9" id="Rectangle-3"></rect>
                    <rect rx="4.70247832" height="10.962961" width="9.40495664" y="38.776399" x="67.8357511" fill="#6A5297" id="Rectangle-3"></rect>
                    <polygon points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605" fill="#6A5297" id="Rectangle-2">
                    </polygon>
                    <path fill="#8B6FC0" id="Rectangle" d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"></path>
                    <path fill="#F6F1FF" id="Fill-12" d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"></path>
                    <rect height="12.863158" width="15.6082259" y="26.1162588" x="58.0305835" fill="#AC8BE9" id="Rectangle-4"></rect>
                    <ellipse ry="2.23319575" rx="2.20116007" cy="33.0919007" cx="65.8346965" fill="#FFFFFF" id="Oval">
                    </ellipse>
                  </g>
                </div>
                <p>Mess Menu</p>
              </div>
            </Link>
          </div>

          <Link to='/holidays' data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="300">
            <div className="card wallet col-md-4">
              <div className="overlay"></div>
              <div className="circle">
                <div className="home-img"><img src='https://github.com/vaishprakhar19/student_portal/blob/main/resources/holiday.jpg?raw=true' alt='hc'/></div>
                <defs></defs>
                <g transform="translate(23.000000, 29.500000)" fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="icon">
                  <rect rx="4.70247832" height="21.8788565" width="9.40495664" y="26.0333433" x="67.8357511" fill="#AC8BE9" id="Rectangle-3"></rect>
                  <rect rx="4.70247832" height="10.962961" width="9.40495664" y="38.776399" x="67.8357511" fill="#6A5297" id="Rectangle-3"></rect>
                  <polygon points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605" fill="#6A5297" id="Rectangle-2">
                  </polygon>
                  <path fill="#8B6FC0" id="Rectangle" d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"></path>
                  <path fill="#F6F1FF" id="Fill-12" d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"></path>
                  <rect height="12.863158" width="15.6082259" y="26.1162588" x="58.0305835" fill="#AC8BE9" id="Rectangle-4"></rect>
                  <ellipse ry="2.23319575" rx="2.20116007" cy="33.0919007" cx="65.8346965" fill="#FFFFFF" id="Oval">
                  </ellipse>
                </g>
              </div>
              <p>Holiday Calender</p>
            </div>
          </Link>

          <Link to='/todolist' data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="600">
            <div className="card wallet col-md-4">
              <div className="overlay"></div>
              <div className="circle">
                <div className="home-img"><img src='https://github.com/vaishprakhar19/student_portal/blob/main/resources/todo.jpg?raw=true' alt='tdl'/></div>
                <defs></defs>
                <g transform="translate(23.000000, 29.500000)" fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="icon">
                  <rect rx="4.70247832" height="21.8788565" width="9.40495664" y="26.0333433" x="67.8357511" fill="#AC8BE9" id="Rectangle-3"></rect>
                  <rect rx="4.70247832" height="10.962961" width="9.40495664" y="38.776399" x="67.8357511" fill="#6A5297" id="Rectangle-3"></rect>
                  <polygon points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605" fill="#6A5297" id="Rectangle-2">
                  </polygon>
                  <path fill="#8B6FC0" id="Rectangle" d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"></path>
                  <path fill="#F6F1FF" id="Fill-12" d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"></path>
                  <rect height="12.863158" width="15.6082259" y="26.1162588" x="58.0305835" fill="#AC8BE9" id="Rectangle-4"></rect>
                  <ellipse ry="2.23319575" rx="2.20116007" cy="33.0919007" cx="65.8346965" fill="#FFFFFF" id="Oval">
                  </ellipse>
                </g>
              </div>
              <p>ToDo List</p>
            </div>
          </Link>

          <Link to='/contacts' data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="0">
            <div className="card wallet col-md-4">
              <div className="overlay"></div>
              <div className="circle">
                <div className="home-img"><img src='https://github.com/vaishprakhar19/student_portal/blob/main/resources/contact.jpg?raw=true' alt='cont'/></div>
                <defs></defs>
                <g transform="translate(23.000000, 29.500000)" fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="icon">
                  <rect rx="4.70247832" height="21.8788565" width="9.40495664" y="26.0333433" x="67.8357511" fill="#AC8BE9" id="Rectangle-3"></rect>
                  <rect rx="4.70247832" height="10.962961" width="9.40495664" y="38.776399" x="67.8357511" fill="#6A5297" id="Rectangle-3"></rect>
                  <polygon points="57.3086772 0 67.1649301 26.3776902 14.4413177 45.0699507 4.58506484 18.6922605" fill="#6A5297" id="Rectangle-2">
                  </polygon>
                  <path fill="#8B6FC0" id="Rectangle" d="M0,19.6104296 C0,16.2921718 2.68622235,13.6021923 5.99495032,13.6021923 L67.6438591,13.6021923 C70.9547788,13.6021923 73.6388095,16.2865506 73.6388095,19.6104296 L73.6388095,52.6639057 C73.6388095,55.9821635 70.9525871,58.672143 67.6438591,58.672143 L5.99495032,58.672143 C2.68403068,58.672143 0,55.9877847 0,52.6639057 L0,19.6104296 Z"></path>
                  <path fill="#F6F1FF" id="Fill-12" d="M47.5173769,27.0835169 C45.0052827,24.5377699 40.9347162,24.5377699 38.422622,27.0835169 L36.9065677,28.6198808 L35.3905134,27.0835169 C32.8799903,24.5377699 28.8078527,24.5377699 26.2957585,27.0835169 C23.7852354,29.6292639 23.7852354,33.7559532 26.2957585,36.3001081 L36.9065677,47.0530632 L47.5173769,36.3001081 C50.029471,33.7559532 50.029471,29.6292639 47.5173769,27.0835169"></path>
                  <rect height="12.863158" width="15.6082259" y="26.1162588" x="58.0305835" fill="#AC8BE9" id="Rectangle-4"></rect>
                  <ellipse ry="2.23319575" rx="2.20116007" cy="33.0919007" cx="65.8346965" fill="#FFFFFF" id="Oval">
                  </ellipse>
                </g>
              </div>
              <p>Contacts</p>
            </div>
          </Link>

        </div>
      </div >
      <div className='footer'>&copy; 2023 BIAS | Developed by Prakhar Vaish | Aarushi Pandey | Radhika Agarwal</div>
    </div >
  )
}
