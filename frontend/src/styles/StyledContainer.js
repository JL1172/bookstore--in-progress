import styled from "styled-components";

export const StyledContainer = styled.div`
width : 100%;
background-color : whitesmoke;
#pagination {
    width : 100%;
    background-color : whitesmoke;
    display  : flex;
    justify-content : space-evenly;
    padding-bottom : 2rem;

    #pagecontainer {
        width  : 15vw;
        display  :flex;
        justify-content : space-evenly;
    }
    input {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 5vw;
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
`