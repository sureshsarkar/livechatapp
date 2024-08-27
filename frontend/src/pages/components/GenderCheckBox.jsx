import React from 'react'

const GenderCheckBox = ({onCheckboxChange,checkedGender}) => {
  return (
    <>
       <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Gender</label>
              <div className="d-flex">
              <div className="form-check mx-1">
                <input className={`form-check-input ${checkedGender==="male"?'selected':''}`} type="checkbox"
                checked={checkedGender==="male"}
                onChange={()=>onCheckboxChange("male")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check">
              <input className={`form-check-input ${checkedGender==="female"?'selected':''}`} type="checkbox"
              checked={checkedGender==="female"}
               onChange={()=>onCheckboxChange("female")}
                 />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
              </div>
            </div>
    </>
  )
}

export default GenderCheckBox
