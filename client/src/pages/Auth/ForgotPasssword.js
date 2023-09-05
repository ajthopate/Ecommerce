

// import { Link } from 'react-router-dom'
// import React, { useState } from 'react'
// import Layout from '../../components/Layout/Layout'
// import toast from 'react-hot-toast'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../../context/auth'
// const Login = () => {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [auth, setAuth] = useAuth()
//     const navigate = useNavigate()


//     //submit
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post("/api/v1/auth/login", {

//                 email,
//                 password,


//             });
//             if (res && res.data.success) {
//                 toast.success(res.data && res.data.message);
//                 setAuth({
//                     ...auth,
//                     user: res.data.user,
//                     token: res.data.token,
//                 });
//                 navigate("/");
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong");
//         }
//     };

//     return (
// <Layout title={"Login"}>
//     <div className='loginn'>

//         <img className="wave" src="/images/wave.png" />
//         <div className="loginContainer">
//             <div className="img" >

//                 <img src="/images/Group.png" />
//             </div>
//             <div className="login-content">
//                 <form className='formm' onSubmit={handleSubmit}>

//                     <h2 className="title">Welcome</h2>
//                     <div className="mb-3">
//                         <input type="Text"
//                             value={email} onChange={(e) => setEmail(e.target.value)} className="loginput form-control" id="exampleInputEmail1" placeholder='Username' />
//                     </div>
//                     <div className="mb-3">
//                         <input type="password"
//                             value={password} onChange={(e) => setPassword(e.target.value)} className="loginput form-control" id="exampleInputPassword1" placeholder='Password' />
//                     </div>
//                     <button type='submit' className='inbtn btn-primary'>Login</button>

//                     <h6>Not Registered! </h6>
//                     <Link to="/register" className=''><input type="button" className="inbtn" defaultValue="Register" />
//                     </Link>
//                 </form>
//             </div>
//         </div>
//     </div>

// </Layout>
//     )
// }

// export default Login

import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password"}>
      <div className='loginn'>

        <img className="wave" src="/images/wave.png" />
        <div className="loginContainer">
          <div className="img" >

            <img src="/images/Group.png" />
          </div>
          <div className="login-content">
            <form className='formm' onSubmit={handleSubmit}>

              <h2 className="title">Reset Password</h2>
              <div className="mb-3">
                <input type="Text"
                  value={email} onChange={(e) => setEmail(e.target.value)} required className="forgotinput form-control" id="exampleInputname2" placeholder='Username' />
              </div>
              <div className="mb-3">
                <input type="Text"
                  value={answer} onChange={(e) => setAnswer(e.target.value)} required className="forgotinput form-control" id="exampleInputAnswer2" placeholder='Who Is Your Best Friend?' />
              </div>
              <div className="mb-3">
                <input type="password"
                  value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="forgotinput form-control" id="exampleInputPassword2" placeholder='New Password' />
              </div>

              <button type='Submit' className='inbtn btn-primary'>Reset</button>


            </form>
          </div>
        </div>
      </div>

    </Layout>
  );
};

export default ForgotPassword;
