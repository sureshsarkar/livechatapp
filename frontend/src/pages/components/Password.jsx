import React from 'react'

const Password = ({handleChange,selectedPassword}) => {
  return (
    <>
      <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" onChange={handleChange} value={selectedPassword.password}/>
            </div>
    </>
  )
}

export default Password
