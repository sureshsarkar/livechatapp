import React from 'react'

const Cpassword = ({handleChange,selectedCpassword}) => {
  return (
    <>
      <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" name="cpassword" onChange={handleChange} value={selectedCpassword.cpassword}/>
            </div>
    </>
  )
}

export default Cpassword
