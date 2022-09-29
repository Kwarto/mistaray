import styled from "styled-components";

export const RightContentWrapper = styled.div`
 margin-left: 20px;
 .heading{
        font-size: 20px;
        padding-left: 20px;
        color: rgba(240, 239, 239, 0.493);
    }
 .skills_section{
    padding: 60px 0;
    margin-top: 10px;
    background: rgba(5, 5, 59, 0.315);
    width: 98%;
    border-radius: 10px;

    .skill_container{
        display: grid;
        grid-template-columns: 50% 50%;
        gap: 1.5rem;
        margin: 0 auto;
        width: 90%;

        article{
            margin-top: 20px;

            div{
                box-shadow: 0 5px 10px rgba(5, 5, 59, 0.315);
                border-radius: .2rem;
                padding: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 10px;
                transition: all 2s ease;
                h5{
                    color: #fff;
                }

                .c-ico{
                    font-size: 25px;
                    color: #fff;
                }

                &:hover{
                    background: rgba(0, 0, 0, 0.322);
                    box-shadow: none;
                }
            }
        }
    }

    @media screen and (max-width: 768px){
      .skill_container{
       grid-template-columns: 1fr;
       width: 100%;
      }  
    }
 }

 .about_section{
    padding: 40px 0;
    margin-top: 10px;
    background: rgba(5, 5, 59, 0.315);
    width: 98%;
    border-radius: 10px;

     .about_content{
       div{
        padding: 15px;
        h6{
        font-size: 18px;
        padding-left: 20px;
        color: rgb(235, 221, 221);
        margin-top: 20px;
       }

       p{
        padding: 0 20px;
        width: 98%;
        font-size: 18px;
        color: rgb(235, 221, 221);
        line-height: 1.8;
       }
       }
     } 

     @media screen and (max-width: 768px){
      width: 100%;
      .about_content{
        div{
            padding: 0;
            p{
                width: 100%;
            }
        }
      }  
    }

    }

    .project_section{
        min-height: 100vh;
        margin-top: 10px;
        background: rgba(5, 5, 59, 0.315);
        padding: 20px;
        width: 98%;

        .project_content{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            article{
                margin-top: 10px;
                box-shadow: 0 5px 10px var(--color-bg);
                padding: 10px;
                border-radius: .5rem;

                div{
                    padding: 10px;
                    small{
                        color: rgb(235, 221, 221);
                        text-decoration: underline;
                        cursor: default;
                    }
                    p{
                        padding: 30px 0;
                        color: rgb(235,221,221);
                        line-height: 1.7;
                    }

                    div{
                        display: flex;
                        gap: 15px;
                        font-size: 20px;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }

        @media screen and (max-width: 1024px) {
            min-height: 80vh;
        }

        @media screen and (max-width: 768px){
          width: 100%;
          .project_content{
            grid-template-columns: 1fr;
           }  
        }
    }

    .contact_section{
     margin: 30px 0;
     background: rgba(5, 5, 59, 0.315);
     min-height: 50vh;
     padding: 10px;
     width: 98%;
     border-radius: 10px;

     article{
        div{
            margin-left: 20px;
            display: flex;
            gap: 20px;
            padding: 20px 20px;
            margin-top: 20px;
            width: 98%;
            cursor: pointer;
            border-radius: 10px;
            transition: all 2s ease-in;
            a{
                color: rgb(235, 221, 221);
            }
            p{
                color: rgb(235, 221, 221);
            }

            .c-ico{
                color: rgb(235, 221, 221);
                font-size: 20px;
            }

            &:hover{
                background: rgba(0, 0, 0, 0.322);
            }
        }
     }
      @media screen and (max-width: 1024px) {
       min-height: 20vh;
      }
    }

    .copy{
        text-align: center;
        color: rgb(235, 221, 221);
        background-color: rgba(5, 5, 59, 0.315);
        width: 98%;
        padding: 10px;
    }

    @media screen and (max-width: 1024px) {
     margin-left: 5px;

     .copy{
        font-size: 15px;
        width: 100%;
     }
    }
`

export const IdentityWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-right: 20px;
 background: rgba(5, 5, 59, 0.315);
 margin-top: 5rem;
 padding: 5px;
 min-height: 20vh;
 border-radius: 10px;
 width: 98%;

 div{
    color: rgb(235, 221, 221);
    h2{
        font-size: 30px;
        padding-bottom: 10px;
    }
    padding-left: 10px;
 }

 .cv{
    position: relative;
    display: flex;
    align-items: center;
    background: blue;
    padding: 12px 25px;
    border-radius: 5px;
    a{
        color: rgb(235, 221, 221);
        font-weight: 700;
    }

    .d-ico{
        position: absolute;
        right: 5px;
    }
 }

 @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    div{
        width: 100%;
        flex-direction: column;
        h1{
            font-size: 16px;
        }
    }
 }
`