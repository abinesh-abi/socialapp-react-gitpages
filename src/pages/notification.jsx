
import React from 'react'
import Community from '../components/Community'
import Notification from '../components/Notification'
import Sidebar from './../components/Sidebar'

function Post(){
  return (
    <div className="row justify-content-center">
      {/* side bar */}
      <div className="col-11 col-md-3 rounded" >
        <Sidebar />
      </div>
      {/* body */}
      <div className="col-12 col-md-4 mt-3 rounded contents">
      <Notification />
      </div>
      {/* friends */}
      <div className="col-11 col-md-3 mt-3  rounded" >
      <Community />
      {/* <Followers /> */}
      </div>
    </div>
  )
}

export default Post