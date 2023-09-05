import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState(false);
  const navigate = useNavigate()
  //submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length == 0 || email.length == 0 || password.length == 0 || phone.length == 0 || address.length == 0 || answer.length == 0) {
      setError(true);
    }
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
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
  /// Validation Function




  return (
    <Layout title={"Register"}>
      <div className="row  ">
        <div className="col-md-6 regpic ">
          <img
            src="/images/signupp.png"
            alt="contactus"
            style={{ width: "98%" }}
          />
        </div>
        <div className='register '>
          <h1 className=" p-2 text-black text-center ">REGISTRATION</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="Text" value={name}
                onChange={(e) => setName(e.target.value)} className="input form-control" id="exampleInputName1" placeholder='Enter Your Name' />
              {error && name.length <= 0 ? <label className="lableInput">Name Can't be Empty </label> : ""}

            </div>

            <div className="mb-3">
              {email.length > 0 && email.length < 4 ? <label className=""><p style={{ color: "gray" }}>Atleast 3 characters required!</p> </label> : ""}

              <input type="Email" value={email}
                onChange={(e) => setEmail(e.target.value)} className="input form-control" id="exampleInputEmail1" placeholder='Enter Your Email' />
              {error && email.length <= 0 ? <label className="lableInput">Email Can't be Empty </label> : ""}
            </div>

            <div className="mb-3">
              {password.length > 0 && password.length < 8 ? <label className=""><p style={{ color: "gray" }}>Password should have 8 characters</p>  </label> : ""}

              <input type="password"
                onChange={(e) => setPassword(e.target.value)} value={password} className="input form-control" id="exampleInputPassword1" placeholder='Enter Your Password' />
              {error && password.length <= 0 ? <label className="lableInput">Password Can't be Empty </label> : ""}

            </div>
            <div className="mb-3">
              {phone.length > 0 && phone.length < 10 ? <label><p style={{ color: "gray" }}>Atleast contains 10 characters!</p></label> : ""}
              <input type="Text" onChange={(e) => setPhone(e.target.value)}
                value={phone} className="input form-control" id="exampleInputPhone1" placeholder='Enter Your Phone' />
              {error && phone.length <= 0 ? <label className="lableInput">Phone Can't be Empty </label> : ""}

            </div>
            <div className="mb-3">
              <input type="Text" value={address}
                onChange={(e) => setAddress(e.target.value)} className="input form-control" id="exampleInputAddress1" placeholder='Enter Your Address' />
              {error && address.length <= 0 ? <label className="lableInput">Address Can't be Empty </label> : ""}

            </div>
            <div className="mb-3">
              <input type="Text" value={answer}
                onChange={(e) => setAnswer(e.target.value)} className="input form-control" id="exampleInputAnswer1" placeholder='Who Is Your Best Friend?' />
              {error && answer.length <= 0 ? <label className="lableInput">Answer Can't be Empty </label> : ""}

            </div>
            <div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>


        </div>
      </div>


    </Layout>
  )
}

export default Register