import styled from "styled-components";

export const SidebarWrapper = styled.div`
 background: rgba(5, 5, 59, 0.315);
 min-height: 100vh;
 border-right: 1px solid rgba(240, 239, 239, 0.212);

 @media screen and (max-width: 768px){
    display: none;
  }
`
export const TopList = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
 min-height: 8vh;
 padding-left: 10px;
 div{
    background: rgb(255, 0, 0);
    width: 15px;
    height: 15px;
    border-radius: 50px;
    cursor: pointer;
    :nth-child(2){
        background: rgb(255, 255, 0);
    }

    :nth-child(3){
        background: rgb(0, 128, 0);
    }

 }
`

export const SideMenu = styled.div`
 min-height: calc(100vh - 8vh);

 li{
    display: flex;
    align-items: center;
    gap: 15px;
    text-align: start;
    margin-left: 20px;
    margin-top: 2px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 80%;
    transition: all 2s ease-in;
    a{
        color: rgb(235, 221, 221);
        font-size: 18px;
        font: bold;
    }

    .l-ico{
        color: rgb(235, 221, 221);
        margin-left: 10px;
    }

    &:hover{
        background: rgba(0, 0, 0, 0.281);
    }
 }

 p{
    margin: 25px;
    color: rgba(240, 239, 239, 0.493);
 }

 @media screen and (max-width: 1024px) {
  p{
    margin: 50px 0;
  }

  li{
    margin-top: 20px;

    .l-ico{
        font-size: 25px;
    }
  }
 }

 /* @media screen and (max-width: 768px){
   display: none;
 } */
`