import styled from "styled-components";

export const NavBarWrapper = styled.div`
 background: rgba(5, 5, 59, 0.781);
 min-height: 8vh;
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 5px;
 position: fixed;
 top: 0;
 left: 21.5%;
 right: 0;
 z-index: 100;
 width: 76%;
  div{
    width: 100%;
    padding-left: 10px;
    h4{
        position: relative;
        font-size: 20px;
        color: rgb(235, 221, 221);

        &:after{
            position: absolute;
            content: '';
            left: 0;
            right: 0;
            background: rgb(235, 221, 221);
            height: 2px;
            width: 12%;
            bottom: -14px;

            @media screen and (max-width: 1024px) {
              width: 20%;
            }
        }
    }

    @media screen and (max-width: 162px){
      h4{
        font-size: 10px;
      }
    }
  }
 .user{
    cursor: pointer;
    width: 10%;
    display: flex;
    align-items: center;
    gap: 20px;
    img{
      width: 60%;
      display: flex;
      aspect-ratio: 1/1;
      border-radius: 100%;
      object-fit: cover;
      border: 2px solid rgb(235, 221, 221);
    }
 }

 @media screen and (max-width: 1024px) {
  width: 80%;
  left: 20%;
 }

 @media screen and (max-width: 768px){
    left: 0;
    right: 0;
    width: 100%;


    .user{
      width: 40%;
    }
  }
`