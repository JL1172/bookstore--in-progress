import styled from "styled-components";

export const StyledPicture = styled.div`
height : 60vh;
width : 100%;
background-image : url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Books.JPG/1280px-Books.JPG");
position : relative;

#content { 
    position : absolute;
    width : 50vw;
    display : flex;
    justify-content : center;
    flex-direction : column;
    left : 3rem;
    top : 10rem;
    background-color : whitesmoke;
    border-radius : 10px;
    color : black;
    padding : 1rem;
    #shopNow {
        position : absolute;
        bottom : -5rem;
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
    }
}

@media screen and (max-width : 480px) {
    height : 70vh;
    #content {
    position : absolute;
    width : 80vw;
    display : flex;
    top : 1.5rem;
    justify-content : center;
    flex-direction : column;
    color : black;
    background-color : whitesmoke;
    padding : 1rem;
    #shopNow {
        width : 60vw;
        left : 2rem;
    }
    }
}
`