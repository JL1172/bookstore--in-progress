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
        width  : 15vw;
        display  :flex;
        
        justify-content : space-evenly;
        align-self: center;
    }
    input {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 10vw;
        height : 3rem;
        color : white;
        font-size : 20px;
  
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
    input {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 30vw !important;
        height : 3rem;
        color : white;
        font-size : 20px;
    }
}
`