import React from 'react';
import { Link } from 'react-router-dom';

const LoginWithEmail = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        // Add your login logic here, e.g., send credentials to backend for verification
        console.log('Login with email and password');
    };

    return (
        <div className="login-page vh-100">
            {/* Background video */}
            <video loop autoPlay muted id="vid">
                <source src="img/bg.mp4" type="video/mp4" />
                <source src="img/bg.mp4" type="video/ogg" />
                Your browser does not support the video tag.
            </video>

            {/* Login form */}
            <div className="p-4 login-page-form">
                <h2 className="text-white my-0">Welcome Back</h2>
                <p className="text-white text-50">Sign in with your email and password</p>
                <form className="mt-5 mb-4" onSubmit={handleLogin}>
                    <div className="form-group mb-3 position-relative">
                        <input id="email" className="form-control-flag-osahan" name="email" placeholder="Email Address" type="email" required />
                    </div>
                    <div className="form-group mb-3 position-relative">
                        <input id="password" className="form-control-flag-osahan" name="password" placeholder="Password" type="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
                </form>

                {/* Alternative login options */}
                <div className="or-osahan text-center my-4 border-bottom">
                    <span>OR</span>
                </div>
                <div className="mb-3">
                    <Link className="btn btn-lg btn-light btn-block" to="/login-phone">
                        <img src="img/envelope.svg" alt /> Continue with Phone
                    </Link>
                </div>
                <div className="mb-3">
                    <button className="btn btn-lg btn-light btn-block">
                        <img src="img/apple-logo.svg" alt="Apple" /> Continue with Apple
                    </button>
                </div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-6 pr-1">
                            <button className="btn btn-lg btn-light btn-block">
                                <img src="img/facebook.svg" alt="Facebook" /> Facebook
                            </button>
                        </div>
                        <div className="col-6 pl-1">
                            <button className="btn btn-lg btn-light btn-block">
                                <img src="img/search.svg" alt="Google" /> Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="new-acc fixed-bottom d-flex align-items-center justify-content-center p-3">
               <Link to="/register-email">
                  <p class="text-center text-white">Craete Account? Sign up</p>
               </Link>
            </div>
            {/* Footer with links */}
            <div className="fixed-bottom text-center p-3">
                <p className="text-white mb-1">By continuing, you agree to our</p>
                <p className="small">
                    <a className="text-white-50 border-bottom" href="terms.html">Terms of Service</a>
                    <a className="text-white-50 border-bottom mx-3" href="privacy.html">Privacy Policy</a>
                    <a className="text-white-50 border-bottom" href="terms.html">Content Policies</a>
                </p>
            </div>
        </div>
    );
};

export default LoginWithEmail;
