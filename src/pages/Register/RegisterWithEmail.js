import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterWithEmail = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [signupTime, setSignupTime] = useState(null);
    const [loginTime, setLoginTime] = useState(null);
  

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const signupStart = performance.now();
            await axios.post('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/auth/signup-email', { fullname , email, password });
            const signupEnd = performance.now();
            console.log((signupEnd - signupStart).toFixed(2));
            console.log('Signup successful');
            


            const loginStart = performance.now();
            const loginResponse = await axios.post('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/auth/login-email', { username: email, password });
            const loginEnd = performance.now();
            console.log((loginEnd - loginStart).toFixed(2));
            console.log('Login successful:', loginResponse.data);


            localStorage.setItem('access_token', loginResponse.data.access_token);
            localStorage.setItem('refresh_token', loginResponse.data.refresh_token);
            localStorage.setItem('user_code', loginResponse.data.user.user_code);


            navigate('/');
        } catch (error) {
            console.error('Signup or login failed:', error.response ? error.response.data : error.message);
            setError('Signup or login failed. Please try again.');
        }
    };

    return (
        <div className="osahan-signup login-page h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dz4pww2qv/image/upload/v1719572424/ceghekligqoskdytpjjm.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative p-4 z-10 text-lg flex flex-col justify-center w-full max-w-md">
                <h2 className="text-white my-0 text-2xl text-center">Hello There.</h2>
                <p className="text-white opacity-75 text-lg text-center">Sign up to continue</p>
                <form className="mt-5 mb-4" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <input
                            id="fullname"
                            className="form-control form-control-lg border-0 text-xm w-full"
                            name="fullname"
                            placeholder="Fullname"
                            type="text"
                            required
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            id="email"
                            className="form-control form-control-lg border-0 text-xm w-full"
                            name="email"
                            placeholder="Email Address"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            id="password"
                            className="form-control form-control-lg border-0 text-xm w-full"
                            name="password"
                            placeholder="Password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block text-lg w-full">Signup</button>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                </form>

                <div className="or-osahan text-center my-4 border-b border-gray-300 text-xl">
                    <span className="bg-black px-2 text-white">OR</span>
                </div>
                <div className="mb-3">
                    <Link className="btn btn-lg btn-light btn-block text-lg w-full" to="/register-phone">
                        <img src="img/envelope.svg" alt="Envelope" className="inline-block mr-2" /> Continue with Phone
                    </Link>
                </div>
                <div className="mb-3">
                    <button className="btn btn-lg btn-light btn-block text-lg w-full">
                        <img src="img/apple-logo.svg" alt="Apple" className="inline-block mr-2" /> Continue with Apple
                    </button>
                </div>
                <div className="mb-3">
                    <div className="grid grid-cols-2 gap-1">
                        <button className="btn btn-lg btn-light text-lg w-full">
                            <img src="img/facebook.svg" alt="Facebook" className="inline-block mr-2" /> Facebook
                        </button>
                        <button className="btn btn-lg btn-light text-lg w-full">
                            <img src="img/search.svg" alt="Google" className="inline-block mr-2" /> Google
                        </button>
                    </div>
                </div>
                <div className="mb-3 d-flex align-items-center justify-content-center p-3">
                    <Link to="/login-email">
                        <p className="text-center text-white text-xs"> Already have a account? <span className='cursor-pointer ml-1 text-pink-500'>Sign in</span></p>
                    </Link>
                </div>
            </div>

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

export default RegisterWithEmail;
