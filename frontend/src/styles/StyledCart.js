import styled from "styled-components";

export const StyledCart = styled.div`
margin-top : 9rem;
width : 100%;


display  :flex;
flex-direction : column;
align-items  : center;
justify-content : center;


background-color : whitesmoke;


min-height : 100vh;

max-height : fit-content;



#cartContainer {
    background-color  :white;
    width : 50vw;
    flex-wrap : wrap;
    height : 70vh;
    border-radius : 1rem;
    box-shadow : 0 0 1em white;

    display : flex;
    flex-direction  :column;
    justify-content : flex-start;

    height : fit-content;
    max-height : fit-content;
    padding : 1rem;
   
}

#headingContainer {
    display : flex;
    justify-content : space-between;
    align-items : center;

    flex-wrap : wrap;
    margin-bottom : 1rem;

    margin-top : 1rem;

    height : fit-content;
    min-height : 10vh;

    padding : .4rem;
}

#itemsContainer {

    display : flex;
    flex-direction : column;

   
    flex-wrap : wrap;

    margin-bottom : 1rem;

    height : fit-content;
    min-height : 40vh;

    padding : .4rem;
}


.itemDiv {
    display : flex;
    border-bottom : 2px solid whitesmoke;
    justify-content : space-evenly;
    flex-wrap : wrap;
    margin-bottom : 3rem;
    padding-bottom : 1.5rem;
    img {
        width : 10vw;
        box-shadow : 0 0 2em lightgray;
    }
}


#checkout {

    display : flex;
    justify-content : space-evenly;
    padding-right : 1rem;

    flex-direction : column;

    height : fit-content;
    min-height : 14vh;
    flex-wrap : wrap;
    width : 40vh;
    margin-bottom : 1rem;

    align-self : flex-end;

    padding : .4rem;


    #col {
        display : flex;
        flex-direction : row;
        width : 100%;
        justify-content : space-between;
        span {
            color : lightgray;
        }
    }
    #reducer {
        display : flex;
        flex-direction : column;
    }
    #checkoutButton {
        border : none;
        border-radius : 2rem;
        height : 2rem;
        color : black;
        &:hover {
            box-shadow : 0 0 .2em lightgray;
            transition : 25ms ease-in-out;
            background-color : white;
        }
        &:active {
            outline : 2px solid whitesmoke;
            outline-offset : 8px;
            transform : scale(105%); 
            transition : 100ms ease-in-out;
        }
    }

}


.row2 {

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items  :center;
}
.row3 {
    display : flex;
    justify-content : space-around;
    align-items : center;
    min-width : 10vw;
    width : fit-content;
    max-width : fit-content;
    
    button {
        border : none;
        background-color : lightgray;
        border-radius : 10rem;
        width : 2rem;
        height : 2rem;
        display : flex;
        justify-content : center;
        align-items : center;
        transition : 100ms ease-in-out;
        &:hover {
            transform : scale(1.1); 
        }
        &:active {
            background-color : whitesmoke;
            outline : 1px solid whitesmoke;
            outline-offset : 8px;
            transition : 100ms ease-in-out;
        }
    }
}

.remove1 {
    border : none;
    background-color : transparent;
    color : red;
    border-bottom : 1px solid red;
    &:hover {
        color : rgb(224, 153, 153);
        border-color : rgb(224, 153, 153);
        transition : .1s ease-in-out;
    }
    &:active {
        transform : scale(1.1);
    }
}
.remove2 {
    border : none;
    background-color : transparent;
    color : red;
    height : 2rem;
    border-bottom : 1px solid red;
    &:hover {
        color : rgb(224, 153, 153);
        border-color : rgb(224, 153, 153);
        transition : .1s ease-in-out;
    }
    &:active {
        transform : scale(1.1);
    }
}



#spanMore {
    color : purple;
    transition : 100ms ease-in-out;
    cursor: pointer;
    &:active {
        transform : scale(1.1);
        transition : 100ms ease-in-out;
    }
}
#more {
    width : 1.5rem;
    height : 1.5rem;
  
}






@media screen and (max-width: 1000px) {
    #cartContainer {
        width : 100%;
        display : flex;
        flex-direction : column;
    }

    .itemDiv {
    margin-bottom : 2rem;
    min-height : 25vh;
    height : fit-content;
    border-bottom : 2px solid lightgray;
    flex-wrap : wrap;
    img {
        width : 30%;
        height : 25%;
        box-shadow : 0 0 2em lightgray;
    }
}
.row3 {
    min-width : 40vw;
    flex-wrap : wrap;
}
}


#col {
        display : flex;
        flex-direction : row;
        width : 100%;
        justify-content : space-between;
        span {
            color : lightgray;
        }
    }
    #reducer {
        display : flex;
        flex-direction : column;
    }
`