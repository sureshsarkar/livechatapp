import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import UserList from './UserList';
const SideBar = () => {
  return (
    <>
      
       <div className="d-flex flex-row mb-3">
        <SearchInput/>
        <SearchButton/>
        </div>
        <div className="d-flex flex-column mb-3">
          <UserList/>
        </div>
    </>
  )
}

export default SideBar
