import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';

function SignUP() {
  const [showPassword, setShowPAssword] = useState(false);
  const [formData, setFoemData] = useState({
    name: '',
    email: '',
    password: ''
  });

  //deStructure
  const { name, email, password } = formData;

  const navigate = useNavigate;

  //e.target.id will give us the id of input tag to set up coresponding value
  const onChange = (e) => {
    setFoemData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader"> Welcome Back</p>
        </header>

        <form>
          <input
            type="text"
            id="name"
            className="nameInput"
            placeholder="Name"
            value={name}
            onChange={onChange}
          />

          <input
            type="email"
            id="email"
            className="emailInput"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input
              type={showPassword ? 'text' : 'password'}
              className="passwordInput"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt="Show Password"
              className="showPassword"
              onClick={() => setShowPAssword((prevState) => !prevState)}
            />
          </div>

          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>

          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        <Link to="/sign-in" className="registerLink">
          Sign In Instead
        </Link>
      </div>
    </>
  );
}

export default SignUP;
