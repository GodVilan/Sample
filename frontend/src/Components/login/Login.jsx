
import React, { useState } from "react";
import "./login.css";

function LoginForm() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleStudLogin = async () => {
		try {
			const res = await fetch('/StdLogin/StudentLogin', {
				method : 'POST',
				headers : {
					'Content-Type' : 'application/json',
				},
				body : JSON.stringify({username, password}),
			});
			const data = await res.json();

			if(res.ok) {
				console.log(data.message);
			} else {
				console.error(data.message);
			}
		} catch (error) {
			console.error('Error : ', error);
		}
	};
  return (
    <div>
      <div className="text-center">
      </div>

      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3"><span>Log In </span><span>Admin Login</span></h6>
                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"/>
                            <i className="input-icon uil uil-at"></i>
                          </div> 
                          <div className="form-group mt-2">
                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"/>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4">Login</button>
                          <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Admin</h4>  
                          <div className="form-group">
                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"/>
                            <i className="input-icon uil uil-at"></i>
                          </div>  
                          <div className="form-group mt-2">
                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"/>
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button className="btn mt-4">Login</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;