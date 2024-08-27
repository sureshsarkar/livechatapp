import React from 'react'

const UserName = ({handleChange,selectedUsername}) => {
  return (
    <>
      <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
              <input type="text" className="form-control" name="username" onChange={handleChange} value={selectedUsername.username}/>
            </div>
            
    </>
  )
}

export default UserName
