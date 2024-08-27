import React from 'react'

const SubmitButton = ({onClickSubmit}) => {
  return (
    <>
      <button type="submit" className="btn btn-primary" onClick={onClickSubmit}>Submit</button>
    </>
  )
}

export default SubmitButton
