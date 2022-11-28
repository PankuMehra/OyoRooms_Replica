import React from 'react'
import "./Profile.css"
import History from './History/History'
import Wallet from './Wallet/Wallet'
import UserDetails from './UserDetails/UserDetails'

const Profile = () => {
  return (
    <div id="profile_Box">
        <Wallet />
        <History />
        <UserDetails />
    </div>
  )
}

export default Profile