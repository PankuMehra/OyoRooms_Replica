import React from 'react'
import {Link} from 'react-router-dom'
import "./HomePage.css"

export default function Navbar1() {
  return (
    <div>
        <div className='mainNav'>
            <div className='abk-leftnav'>
                <img src='/Images/oyologo.png' alt='oyored'/>

            </div>

            <div className='abk-rightnav'>
                <div>
                <img src="/Images/becomeMember.png" alt="becomeamember" />
                </div>
               <div>
                <img src="/Images/listProperty.png" alt="listproperty" />
               </div>
               <div>
                <img src="/Images/language.png" alt="language" />
               </div>
              
               <div >
              {/* <Link to="" className="login-signup">  */}
            <a href="#"  className="login-signup"><img src="/Images/profile.png" alt="profile" />
                <p>Login / Signup</p></a>  
                  {/* <img src="/Images/profile.png" alt="profile" />
                <p>Login / Signup</p> */}
              {/* </Link> */}
               </div>
               

            </div>


        </div>



    </div>
  )
}
