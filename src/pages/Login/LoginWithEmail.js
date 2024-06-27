import React from 'react';
import { Link } from 'react-router-dom';

const LoginWithEmail = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        // Add your login logic here, e.g., send credentials to backend for verification
        console.log('Login with email and password');
    };

    return (
        <div className="login-page vh-100 relative overflow-hidden">
            {/* Background image with shadow */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dz4pww2qv/image/upload/v1719502244/mznp6bdxtpogogt9wucf.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            <div className="relative p-4 z-10 text-lg flex flex-col justify-center h-full">
                <h2 className="text-white my-0 text-3xl">Welcome Back</h2>
                <p className="text-white opacity-75 text-xl">Sign in with your email and password</p>
                <form className="mt-5 mb-4" onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <input id="email" className="form-control form-control-lg border-0 text-lg" name="email" placeholder="Email Address" type="email" required />
                    </div>
                    <div className="form-group mb-3">
                        <input id="password" className="form-control form-control-lg border-0 text-lg" name="password" placeholder="Password" type="password" required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block text-lg">Login</button>
                </form>

                {/* Alternative login options */}
                <div className="or-osahan text-center my-4 border-bottom text-xl">
                    <span>OR</span>
                </div>
                <div className="mb-3">
                    <Link className="btn btn-lg btn-light btn-block text-lg" to="/login-phone">
                        <img src="img/envelope.svg" alt="Envelope" className="inline-block mr-2" /> Continue with Phone
                    </Link>
                </div>
                <div className="mb-3">
                    <button className="btn btn-lg btn-light btn-block text-lg">
                        <img src="img/apple-logo.svg" alt="Apple" className="inline-block mr-2" /> Continue with Apple
                    </button>
                </div>
                <div className="mb-3">
                    <div className="grid grid-cols-2 gap-1">
                        <button className="btn btn-lg btn-light  text-lg">
                            <img src="img/facebook.svg" alt="Facebook" className="inline-block mr-2" /> Facebook
                        </button>
                        <button className="btn btn-lg btn-light  text-lg">
                            <img src="img/search.svg" alt="Google" className="inline-block mr-2" /> Google
                        </button>
                    </div>
                </div>

               
            </div>

            {/* Footer with links */}
            <div className="absolute bottom-0 w-full text-center p-3">
                <p className="text-white mb-1 text-lg">By continuing, you agree to our</p>
                <p className="small">
                    <a className="text-white opacity-75 border-b border-white-50 text-lg" href="terms.html">Terms of Service</a>
                    <a className="text-white opacity-75 border-b border-white-50 mx-3 text-lg" href="privacy.html">Privacy Policy</a>
                    <a className="text-white opacity-75 border-b border-white-50 text-lg" href="terms.html">Content Policies</a>
                </p>
            </div>
        </div>
    );
};

export default LoginWithEmail;
