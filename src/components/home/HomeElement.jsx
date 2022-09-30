import styled from "styled-components";
import Bg from '../../img/main_bg.jpg'
export const HomeWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  background: url(${Bg});
  background-position: center;
  background-size: cover;
`

export const HomeContentContainer = styled.div`
 background: var(--color-bg);
 min-height: 100vh;
 display: grid;
 grid-template-columns: 20% 80%;
  @media screen and (max-width: 768px){
    grid-template-columns: 1% 99%;
  }
`

export const Left = styled.div`
min-height: 100vh;
`
export const Right = styled.div`
height: 100vh;
overflow-y: scroll;
scroll-behavior: smooth;
::-webkit-scrollbar{
   background: transparent;
}
`