import React from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginWithPhone = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Send OTP');
  };

  return (
    <div className="login-page vh-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dz4pww2qv/image/upload/v1719502244/mznp6bdxtpogogt9wucf.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative p-4 z-10 text-lg flex flex-col justify-center h-full">
        <h2 className="text-white my-0 text-3xl">Welcome Back</h2>
        <p className="text-white opacity-75 text-xl">Sign in to continue</p>
        <form className="mt-5 mb-4" onSubmit={handleLogin}>
          <div className="form-group mb-3">
            <PhoneInput
              country={'in'}
              inputClass="w-full py-3 px-8  rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
              containerClass="w-full"
              buttonClass="bg-transparent border-none"
              dropdownClass="bg-white shadow-lg"
            />
          </div>
          <button type="submit" className="w-full py-3 mt-3 bg-pink-700 text-white text-lg rounded-full">Send OTP</button>
          </form>
          {/* Alternative login options */}
          <div className="or-osahan text-center my-4 border-bottom text-xl">
                    <span>OR</span>
                </div>
                <div className="mb-3">
                    <Link className="btn btn-lg btn-light btn-block text-lg" to="/login-email">
                        <img src="img/envelope.svg" alt="Envelope" className="inline-block mr-2" /> Continue with Email
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
                <div className="mb-3 d-flex align-items-center justify-content-center p-3">
                    <Link to="/register-phone">
                        <p className="text-center text-white text-xs"> Create account?<span className='cursor-pointer ml-1 text-pink-500'>Sign up</span></p>
                    </Link>
                </div>
               
            </div>

            {/* Footer with links */}
            <div className="absolute bottom-0 w-full text-center p-3">
                <p className="text-white mb-1 text-xm">By continuing, you agree to our</p>
                <p className="small">
                    <a className="text-white opacity-75 border-b border-white-50 text-xs" href="terms.html">Terms of Service</a>
                    <a className="text-white opacity-75 border-b border-white-50 mx-3 text-xs" href="privacy.html">Privacy Policy</a>
                    <a className="text-white opacity-75 border-b border-white-50 text-xs" href="terms.html">Content Policies</a>
                </p>
            </div>
        </div>
  );
};
export default LoginWithPhone;
