import React from 'react'
import {HomeWrapper, HomeContentContainer, Left, Right} from './HomeElement'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import RightContent from '../rightcontent/RightContent'
function Home() {
  return (
    <>
     <HomeWrapper>
       <HomeContentContainer className='container'>
         <Left>
           <Sidebar />
         </Left>
         <Right>
           <Navbar />
           <RightContent />
         </Right>
       </HomeContentContainer>
     </HomeWrapper>
    </>
  )
}

export default Home