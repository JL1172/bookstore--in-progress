import styled, { css } from "styled-components";
import {keyframes} from "styled-components";

const kf = keyframes`
0% {

}
100% {
    transform : scaleY(100%);
    opacity : 1;
}
`


export const StyledFilter = styled.div`
width : 45vw;
display  :flex;
align-self : flex-start;
transform : scaleY(0%);
background-color : white;

max-height : fit-content;

opacity : 1;
transform-origin : top;
border-right : 2px solid whitesmoke;
border-bottom : 2px solid whitesmoke;

${props => props.filterOn &&
css`
animation : ${kf} .2s ease-in-out forwards;
`
}

form {
    padding : 1rem;
}

.filterSection {
    width : 45vw;
    border-bottom : 1px solid whitesmoke;
    padding-top : 1rem;
    input[type=radio] {
        width : 5vw;
    }
}
.last {
    display : flex;
    flex-direction : column;
    ${props => props.removeFilterStatus &&
    css`
    flex-direction : row;
    `
    }

    #firstButton {
        margin-right : 2rem;
        margin-left : 3rem;
    }
    button {
        align-self : center;
        width : 13vw;
        border :none;
        flex-wrap : wrap;
        color : white;
        border-radius : 10px;
        transition : .1s ease-in-out;
        background-color : dodgerblue;
        &:hover {
            color : dodgerblue;
            outline : 1px solid dodgerblue;
            background-color : white;
        }
        &:active {
            transform : scale(105%);
            transition : .1s ease-in-out;
        }
    }
}


@media screen and (max-width : 1000px) {
    width : 100vw;
    .filterSection {
        width : 80vw;
        display : flex;
        align-items : center;
        input[type=radio] {
            width : 5vw;
            height : 3vh;
        }
    }
    .last {
    display : flex;

    button {
        align-self : center;
        width : 30vw !important;
        font-size : .9rem;
        height : 5vh;
    }
}
}
`