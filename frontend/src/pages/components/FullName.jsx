import React from 'react'

const FullName = ({handleChange,selectedFullname}) => {
  return (
    <div className="mb-3">
      <label htmlFor="fullname" className="form-label">Full Name</label>
      <input
        type="text"
        className="form-control"
        name="fullname"
        id="fullname"
        onChange={handleChange}
        value={selectedFullname}
      />
    </div>
  );
}

export default FullName
