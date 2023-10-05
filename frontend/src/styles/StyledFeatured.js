import styled from "styled-components";

export const StyledFeature = styled.div`
background-color : whitesmoke;
width : 100%;

min-height : 70vh;
max-height : fit-content;

display : flex;
flex-direction : column;
justify-content : flex-start;
align-items : center;
padding-top : 2.2rem;

h1 {
    margin-top : 1rem;
}

#wrapper {

    display : flex;
    justify-content : space-around;
    align-items : center;
    flex-wrap : wrap;
    
    width : 100%;
    min-height : 50vh;

    margin-top : 3rem;
    max-height  : fit-content; 
}
.showcase {
    box-shadow : 0 0 1em gray;
    display : flex;
    justify-content : space-around;
    align-items : center;

    flex-direction : column;

    min-height : 30rem;
    max-height : fit-content;

    min-width : 15rem;
    max-width : fit-content;

    transition : 50ms ease-in-out;


    &:hover {
      
      transform : scale(101%);
      transition : 50ms ease-in-out;
    }
    img {
      height : 15rem;
}

#shopNow {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 15vw;
        height : 3rem;
        color : white;
        font-size : 20px;
        border-radius : 2rem;
        &:hover {
            background-color : white;
            color : rgb(163, 74, 74);
            transform : scale(105%);
            transition : 100ms ease-in-out;
        }
        &:active {
            transform : scale(110%);
        }
    }

}





@media screen and (max-width : 700px) {
    height : fit-content;
    padding-bottom : 3rem;
    margin-top : 0rem;
    #wrapper {
        .showcase {
            margin-bottom : 1.5rem;
            min-width : 70vw !important;
        }
    }
    #shopNow {
        width :50vw !important;
    }
}
`