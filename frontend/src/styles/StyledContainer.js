import styled from "styled-components";

export const StyledContainer = styled.div`
width : 100%;
background-color : whitesmoke;
#pagination {
    width : 100%;
    background-color : whitesmoke;
    display  : flex;
    height : 10vh;
    justify-content : space-evenly;
    align-items : center;

    position : fixed;
    bottom : 0;

    #pagecontainer {
        width  : 25vw;
        display  :flex;
        
        justify-content : space-evenly;
        align-self: center;
    }
    .iconN {
        color : lightgray;
        width : 1.2rem;
        height : 1.2rem;
    }
    .left:nth-of-type(1) {

        transform : rotate(-180deg);
    }
    .iconN:hover {
        color : rgb(163, 74, 74);
    }
    
    button {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 20vw;
        height : 3rem;
        color : white;
        font-size : 1em;
  
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
@media screen and (max-width: 700px) {
    #pagecontainer {
        width  : 100vw !important;
        display  :flex;
        justify-content : space-evenly;
    }
    button {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 50vw !important;
        height : 3rem;
        color : white;
        font-size : 20px;
    }
}
@media screen and (max-width: 1000px) {
    #pagecontainer {
        width  : 100vw !important;
        display  :flex;
        justify-content : space-evenly;
    }
    button {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 40vw !important;
        height : 3rem;
        color : white;
        font-size : 20px;
    }
}
`