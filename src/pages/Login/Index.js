import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Input from '../../components/Inputs/Input'
const Login = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='flex flex-col space-y-7 min-h-screen min-w-max justify-center items-center '>
                <div className="text-center text-black text-3xl font-semibold font-['Inter']">Log In</div>
                {/* Email */}
                <div className='bg-slate-300 border-none rounded  outline-none h-[50px]  '>
                    <Input type='email' name='email' id='userEmail' placeholder='Email' classesNames='bg-slate-300  rounded border-slate-500  h-[50px] min-w-[343px] p-2 outline-none' />
                </div>
                {/* Password */}
                <div className='bg-slate-300 border-spacing-3  rounded  outline-none h-[50px] p-x-4 min-w-[343px] '>
                    <Input type={showPassword ? 'text' : 'password'} onChange={handlePasswordChange} defaultValue={password} name='Password' id='userPassword' placeholder='Password' classesNames='bg-slate-300   outline-none h-[48px] min-w-[300px] p-2 ' />
                    <button onClick={togglePasswordVisibility}>{showPassword ? 'Hide' : 'Show'}</button>
                </div>
                <div>
                    <Link to={'/task'}>
                        <Input type='Submit' value="Login" name='Button' id='submitButton' classesNames='bg-black text-white border rounded-full h-[50px] w-[343px] outline-none cursor-pointer ' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login




// import React, { useState } from 'react';

// function Login() {
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     return (
//         <div className='mt-5'>
//             <label>
//                 Password:
//                 <input
//                     type={showPassword ? 'text' : 'password'}
//                     value={password}
//                     onChange={handlePasswordChange}
//                 />
//             </label>
//             <button className='bg-blue-600 rounded-xl p-5' onClick={togglePasswordVisibility}>
//                 {showPassword ? 'Hide' : 'Show'} Password
//             </button>
//             {/* <p>Password: {password}</p> */}
//         </div>
//     );
// }

// export default Login;
