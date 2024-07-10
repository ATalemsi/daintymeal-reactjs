import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginWithEmail = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State to track loading
    const navigate = useNavigate(); 

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Set loading state to true when login starts
        try {
            const response = await axios.post('https://x2r9rfvwwi.execute-api.eu-north-1.amazonaws.com/dev/auth/login-email', { username: email, password });
            console.log('Login successful:', response.data);

            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            localStorage.setItem('user_code', response.data.user.user_code);

            navigate('/'); 
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
            setError('Incorrect email or password. Please try again.');
        } finally {
            setIsLoading(false); // Set loading state to false when login is done
        }
    };

    return (
        <div className="login-page vh-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dz4pww2qv/image/upload/v1719502244/mznp6bdxtpogogt9wucf.jpg')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            
            <div className="relative p-4 z-10 text-lg flex flex-col justify-center h-full">
                <h2 className="text-white my-0 text-3xl">Welcome Back</h2>
                <p className="text-white opacity-75 text-lg">Sign in with your email and password</p>
                <form className="mt-5 mb-4" onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <input
                            id="email"
                            className="form-control form-control-lg border-0 text-xm"
                            name="name"
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
                            className="form-control form-control-lg border-0 text-xm"
                            name="password"
                            placeholder="Password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block text-lg">
                        {isLoading ? (
                            <svg
                                className="animate-spin h-8 w-8 text-white mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l-3.709 3.71A9.974 9.974 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-3.647z"
                                ></path>
                            </svg>
                        ) : (
                            'Login'
                        )}
                    </button>
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                </form>

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
                    <div className="mb-3 d-flex align-items-center justify-content-center p-3">
                        <Link to="/register-email">
                            <p className="text-center text-white text-xs"> Create account?<span className='cursor-pointer ml-1 text-pink-500'>Sign up</span></p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 w-full text-center p-3 mt-16">
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

export default LoginWithEmail;
