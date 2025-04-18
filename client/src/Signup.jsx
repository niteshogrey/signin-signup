import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "", 
    confirm_password: ""
  })

  const handleChange = (e) =>{
    const {name, value} = e.target
    setData((prev) =>({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () =>{
    console.log(data);
  }

  return (
    <div>
      <section className="vh-100" style={{backgroundcolor: '#eee'}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderradius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form  className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={data.name}
                              onChange={handleChange}
                              id="form3Example1c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" for="form3Example3c">
                             Enter Your Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={data.email}
                              onChange={handleChange}
                              id="form3Example3c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              value={data.password}
                              onChange={handleChange}
                              id="form3Example4c"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div
                            data-mdb-input-init
                            className="form-outline flex-fill mb-0"
                          >
                            <label className="form-label" for="form3Example4cd">
                              Confirm password
                            </label>
                            <input
                              type="password"
                              name="confirm_password"
                              value={data.confirm_password}
                              onChange={handleChange}
                              id="form3Example4cd"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            id="form2Example3c"
                          />
                          <label className="form-check-label" for="form2Example3">
                            I agree all statements in{" "}
                            <a href="/">Already have an account</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            onClick={()=>handleSubmit()}
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
