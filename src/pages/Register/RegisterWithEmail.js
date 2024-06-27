import React from 'react';
import { Link } from 'react-router-dom';

const RegisterWithEmail = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted');
        // Redirect or perform other actions after form submission
    };

    return (
        <div className="osahan-signup login-page">
            <video loop autoPlay muted id="vid">
                <source src="img/bg.mp4" type="video/mp4" />
                <source src="img/bg.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="vh-100">
                <div className="p-4 login-page-form">
                    <h2 className="text-white my-0">Hello There.</h2>
                    <p className="text-white text-50">Sign up to continue</p>
                    <form className="mt-5 mb-4" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input type="text" placeholder="Enter Email" className="form-control form-control-lg border-0" id="exampleInputNumber1" aria-describedby="numberHelp" />
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" placeholder="Enter Password" className="form-control form-control-lg border-0" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">SIGN UP</button>
                        <div className="or-osahan text-center my-4 border-bottom">
                            <span>OR</span>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-lg btn-light btn-block">
                                <img src="img/envelope.svg" alt="Envelope icon" /> Signup with Phone
                            </button>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-lg btn-light btn-block">
                                <img src="img/apple-logo.svg" alt="Apple logo" /> Signup with Apple
                            </button>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-6 pr-1">
                                    <button className="btn btn-lg btn-light btn-block">
                                        <img src="img/facebook.svg" alt="Facebook logo" /> Facebook
                                    </button>
                                </div>
                                <div className="col-6 pl-1">
                                    <button className="btn btn-lg btn-light btn-block">
                                        <img src="img/search.svg" alt="Google logo" /> Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="new-acc fixed-bottom d-flex align-items-center justify-content-center p-3">
                    <Link to="/login-email">
                        <p className="text-center text-white">Already have an account? Sign in</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterWithEmail;
