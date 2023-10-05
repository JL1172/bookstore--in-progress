import styled from "styled-components";

export const StyledPicture = styled.div`
height : 60vh;
width : 100%;
background-image : url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Books.JPG/1280px-Books.JPG");
display: flex;
flex-direction : column;
justify-content : center;
align-items : center;
#content { 
    width : 50vw;
    display : flex;
    height : fit-content;
    min-height : 0;
    align-items  : center;
    justify-content : center;
    flex-direction : column;
    background-color : whitesmoke;
    border-radius : 10px;
    color : black;
    padding : 1rem;
    #shopNow {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 10vw;
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

@media screen and (max-width : 600px) {
    height : 70vh;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    #content {
    margin : 0;
    width : 80%;
    display : flex;
    height : fit-content;
    color : black;
    background-color : whitesmoke;
    padding : 1rem;
    #shopNow {
        width : 60vw;
    }
    }
}
`