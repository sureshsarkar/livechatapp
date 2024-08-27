import React from 'react'
import SideBar from '../components/SideBar'
import Conversation from '../components/Conversation'

const Home = () => {
  return (
    <>
    <section className='homePage'>
      <div className="container">
        <div className="row">
          <div className="boxDiv">
          <div className="col-md-4 border-r-2">
         <SideBar/>
          </div>
          <div className="col-md-8">
           <Conversation/>
          </div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
