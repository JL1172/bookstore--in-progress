import styled, { css } from "styled-components";

export const StyledBook = styled.div`
background-color : whitesmoke;
width : 100%;

min-height : 220vh;
height : fit-content;
max-height : fit-content;

display : flex;
flex-direction : column;
justify-content : flex-start;
align-items : center;
padding-top : 2.2rem;


flex-wrap : wrap;

margin-top  : 10rem;

#top {
    background-color  :white;
    width : 100%;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    position : relative;
    #openBook {
        width  : 2rem;
        height : 2rem;
    }
}



#bookstore {
    font-size : 40px;
}

#wrapper {

display : flex;
justify-content : space-evenly;
align-items : center;


flex-basis : 100px;
flex-wrap : wrap;

width : 100%;
min-height : 50vh;

height : 200vh;

margin-top : 3rem;
max-height  : fit-content; 
margin-bottom  :4rem ;



}
.showcase {

background-color : white;
box-shadow : 0 0 1em gray;
flex-wrap : wrap;
display : flex;
justify-content : space-around;
align-items : center;

flex-direction : column;

min-height : 30rem;

max-height : fit-content;

min-width : 20vw;
max-width : fit-content;

transition : 50ms ease-in-out;


&:hover {
  
  transform : scale(101%);
  transition : 50ms ease-in-out;
}
img {
  height : 15rem;
}
}
#shopNow {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 18vw;
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
            transform : scale(107%);
            outline : 2px solid rgb(163, 74, 74);
        }
    }

#filterWrap {
    cursor: pointer;
    display : flex;
    align-items : center;
    
    #addFilterText {
        font-size : 20px;
    }
   
}

#filterWrap::before {
    content : "";
    position : absolute;
    border  : 2px solid whitesmoke;
    bottom  :.5rem;
    opacity : 0;
    transform-origin : left;
    transition : .2s ease-in-out;
    width : 2rem;
    ${props => props.filterOn &&
    css`
    transform : scaleX(400%);
    opacity : 1;
    transition : .2s ease-in-out;
    `
    }
}


#filter{
    width : 1.2rem;
    height : 1.2rem;
    transition : 50ms ease-in-out;
    transition : .1s ease-in-out;
    ${props => props.filterOn && 
    css`
    transform  : rotate(45deg);
    transition : .1s ease-in-out;
    `
    }
}






    @media screen and (max-width : 700px) {
    height : fit-content;
    padding-bottom : 3rem;
    #wrapper {
        .showcase {
            margin-bottom : 1.5rem;
            min-width : 70vw !important;
        }
    }
    #shopNow {
        width :50vw !important;
    }
    #addFilterText {
        font-size : 16px !important;
    }
    #filterWrap::before {
        content : "";
        position : absolute;
        border  : 2px solid whitesmoke;
        bottom  :.5rem;
        opacity : 0;
        transform-origin : left;
        transition : .2s ease-in-out;
        width : 2rem;
        ${props => props.filterOn &&
        css`
        transform : scaleX(350%);
        opacity : 1;
        transition : .2s ease-in-out;
    `
    }
    }
}
`