import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const LeftSide = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         email,
            //         password,
            //     }),
            // });

            // const data = await response.json();

            // if (!response.ok) {
            //     throw new Error(data.message || 'Something went wrong');
            // }

            // // Handle successful response (data contains the response)

            // localStorage.setItem('token', data.token);
            // localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/dashboard');
        } catch (error) {
            // Handle error during the API call
            console.error('Error:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-white justify-between">
            <div className="logo relative top-[-100px]">
                <Link to="/">
                    <img src={require("../../images/logo.png")} alt="logo" width={142} height={42} />
                </Link>
            </div>
            <div>
                <div className="">
                    <div className="text-[45px] font-[700]">
                        Log in to WheelDeal
                    </div>
                    <div className="mt-[11px] text-[#767676] text-[14px] font-[500]">
                        Log in to manage your vehicles
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="mt-[20px]">
                    <div className="mt-[40px]">
                        <div className="text-[12px] font-[500]">
                            Email / Username
                        </div>
                        <input
                            type="text"
                            placeholder="john@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex items-center justify-between cursor-pointer w-[400px] h-[50px] rounded-xl px-5 text-[14px] font-[400] mt-4"
                            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                        />
                    </div>

                    <div className="mt-[20px] relative w-[400px]">
                        <div className="text-[12px] font-[500]">
                            Password
                        </div>
                        <input
                            type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex items-center justify-between cursor-pointer w-[400px] h-[50px] rounded-xl px-5 text-[14px] font-[400] mt-4"
                            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                        />
                        <span
                            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            style={{
                                position: 'absolute',
                                right: '20px',
                                top: '70%',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer',
                                color: "white"
                            }}
                        >
                            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {error && <div className="text-red-500 mt-4">{error}</div>}

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`submitButton lg:w-[400px] md:w-[510px] w-[325px] h-[50px] flex justify-center items-center text-[16px] font-[500] mt-[30.4px] text-black bg-white rounded-[10px] hover:bg-brand-main transition-all duration-300 hover:text-white gap-3 relative ${loading && 'opacity-50 cursor-not-allowed'}`}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>

                    <div className="text-[14px] font-[500] text-[#4C4C4C] mt-10 w-[380px] text-center">
                        <span>Forgot your password?</span>
                        <span className="text-[#FFB600] cursor-pointer"> Reset Password</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LeftSide;
