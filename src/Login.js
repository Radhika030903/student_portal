import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import {RxCross2} from 'react-icons/rx';


function Login(props) {
  const navigate = useNavigate();
  const [coursetemp, setcoursetemp] = useState('');
  const [popup, setPopup] = useState(false);
  const [reg, setReg] = useState(false);

  const handleCourse = (event) => {
    setcoursetemp(event.target.value);
    props.setCourse(event.target.value);
  }
  const handleYear = (event) => {
    props.setYear(event.target.value);
  }
  const handleStream = (event) => {
    props.setStream(event.target.value);
  }
  const handleName = (event) => {
    props.setName(event.target.value);
  }
  const handleLogin = () => {
    navigate('/Home');
    props.setLogin(true);
  }
  const handlePopup = () => {
    popup ? setPopup(false) : setPopup(true);
  }
  const handleReg = () => {
    reg ? setReg(false) : setReg(true);
  }
  const handleDaysch = () => {
    props.setDaysch(true);
  }
  const handleHosteller = () => {
    props.setDaysch(false);
  }


  if (coursetemp === 'MCA') props.setStream('');
  return (
    <div className="page">
      <div className='login-background'></div>
      <div className='blur dark'></div>
      <div id="introduction">
        <div className="intro-text" > <h1 className="display-4">One destination<br/>for all your<br/>Schedules</h1>
          <p>A platform where you can plan and manage all your daily tasks and schedules!</p>
          <button class="button" onClick={handlePopup}>Login</button>
        </div>
        <img id="logo" src="https://github.com/vaishprakhar19/student_portal/blob/main/resources/birla-logo.png?raw=true" />
      </div>
      <div className="blur blackish" hidden={!popup}></div>



      <form onSubmit={handleLogin} id="login-form" style={popup ? { transform: 'scale(1)' } : { transform: 'scale(0)' }}>
        <h1>Student {reg?'Registeration':'Login'}</h1>
        <RxCross2 id="close-button" onClick={handlePopup} />
        <div className="form-group">
          <input required hidden={!reg} type="text" className=" textin" id="name" aria-describedby="namelHelp" placeholder="Enter Full Name" onChange={handleName} />
        </div>
        <div className="form-group">
          <input required type="email" className="textin" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
          
          <small hidden={!reg} id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <input required type="password" className="textin" id="password" placeholder="Password" />
        </div>
        <select className="select" hidden={!reg} onChange={handleCourse}>
          <option>Course</option>
          <option>MCA</option>
          <option>BTech</option>
        </select>
        <select className="select" hidden={!reg} onChange={handleYear}>
          <option>Year</option>
          <option>1</option>
          <option>2</option>
          <option hidden={coursetemp === 'MCA' ? true : false}>3</option>
          <option hidden={coursetemp === 'MCA' ? true : false}>4</option>
        </select>
        <select hidden={coursetemp === 'MCA' ? true : false || !reg} className="select" onChange={handleStream}>
          <option>Stream</option>
          <option>CSE</option>
          <option>ECE</option>
        </select>
        <div hidden={reg} className="form-check">
          <input type="checkbox" className="form-check-input" id="checkbox" />
          <label className="form-check-label" htmlFor="checkbox">Remember me</label>
        </div>
        <div class="form-check radio" hidden={!reg}>
          <input class="form-check-input" type="radio" name="exampleRadios" id="radio1" value="Hosteller" onChange={handleHosteller} />
          <label class="form-check-label" htmlFor="exampleRadios1">
            Hosteller
          </label>
        </div>
        <div class="form-check radio" hidden={!reg}>
          <input class="form-check-input" type="radio" name="exampleRadios" id="radio2" onChange={handleDaysch} value="DaySch" />
          <label class="form-check-label" htmlFor="exampleRadios2">
            Day Scholar
          </label>
        </div>
        <p>{reg ? 'Have an account? ' : "Don't have an account? "}<Link onClick={handleReg}>{reg ? "Login Here." : "Register Now."}</Link></p>
        <button className='button' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export { Login };
