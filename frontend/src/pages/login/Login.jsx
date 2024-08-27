import React, { useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import { Link } from 'react-router-dom'

const Login = () => {
  const [inputs,setInputs] = useState({
    username:'',
    password:'',
  })

  const handelSubmit = async (e)=>{
    try {
      e.preventDefault()
      const data ={
        username: inputs.username,
          password: inputs.password
      }
   
      return false;
      // const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
          // username: inputs.username,
          // password: inputs.password
      // })
      // if (data?.success) {
      //     alert("Blog Update");
      //     navigate("/my-blogs")
      // }

    } catch (error) {
      
    }
  }

  const handelChange = (e)=>{
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value
  }));
  }
  return (
    <>
     <section>
      <div className="container bgImg">
        <div className="row">
          <div className="col-md-12">
            <div className="marginTop">
            <h1 className='h1 text-center'>Login into LiveChat</h1>
            <div className="formWidth">
            <form action='' method='post'>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
              <input type="text" className="form-control" name="username" value={inputs.username} onChange={handelChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={inputs.password} onChange={handelChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handelSubmit}>Submit</button>
               <span className='text-primary'>New User <Link className='underline' to="/signup">SignUp</Link></span>
            </form>
          </div>
          </div>
          </div>
        </div>
      </div>
     </section>
    </>
  )
}

export default Login
