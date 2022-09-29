import React from 'react'
import {NavBarWrapper,} from './NavbarElement'
import Profile from '../../img/profile.jpg'
function Navbar() {
  return (
    <>
      <NavBarWrapper>
         <div>
           <h4>~Hez_Ray~</h4>
         </div>
         <div className='user'>
          <img src={Profile} alt="my-profile" title='Raymond Owusu'/>
         </div>
      </NavBarWrapper>
    </>
  )
}

export default Navbar