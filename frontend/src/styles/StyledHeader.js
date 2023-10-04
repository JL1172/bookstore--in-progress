import styled from "styled-components";

export const StyledHeader = styled.div`
display : flex;
flex-direction : column;
width : 100%;
background-color : whitesmoke;


@media screen and (max-width: 480px){
    #topContainer {
    display : flex;
    padding : 0;
    justify-content : center;
    flex-direction : column;
    .wrap {
        flex-basis : 1%;
        flex-wrap : wrap;
        margin-top : 1rem;
    }
    #book {
        display : flex;
        position : none;
        .book {
            left : -1.5rem !important;
        }
    }
    #search {
        position : absolute;
        right : -6rem !important;
        top : .5rem !important;
        margin-bottom  : 4rem;
    }
    #iconContainer {
        width : 5rem !important;
    }
}
#bottomContainer {
    margin-top : 1rem;
}
}


#topContainer {
display : flex;
justify-content : space-between;
padding-left  : 2rem;
padding-right  : 2rem;
align-items : center;
flex-basis : 105px;
flex-wrap : wrap;


#book {
    position  :relative;
    .book {
        position : absolute;
        left : -1.5rem;
        color : rgb(163, 74, 74);
        top : 2px;
        height : 2rem;
        width : 1.5rem;
    }
}
#book::before {
    content : "";
    position : absolute;
    border : 2px solid rgb(163, 74, 74);
    left : -1.5rem;
    top : 2.4rem;
    width : 2rem;
    transform-origin : left;
    opacity : 0;
    transition : 100ms ease-in-out;
}
#book:hover::before {
    transform : scaleX(700%);
    opacity : 1;
    transition : 100ms ease-in-out; 
}


h2 {
    font-weight : bold;
}



#searchbar {
    position : relative;
    input {
        width : 150%;
        border : 1px solid lightgray;
        outline : none;
        padding-left  : .4rem;
    }
    #search {
        position : absolute;
        right : .6vw;
        top : .4rem;
    }
}


#iconContainer {
    display : flex;
    width : 10vw;
    border-radius : 10px;
    justify-content : space-around; 
    .icons {
        height : 1.5rem;
        transition : 50ms;
        width : 1.5rem;
        &:hover{
            transform : scale(1.1);
            transition : 50ms ease-in-out;
        }
    }
}

}

.wrap {
    flex-wrap : wrap;
    flex-basis : 300px;
    display : flex;
    flex-direction : row;
}

#bottomContainer {
display : flex;
justify-content : space-around;
align-items : center;
flex-basis : 70px;
flex-wrap : wrap;
background-color : rgb(163, 74, 74);
a {
    color : white;
    font-size : 20px;
}
h4 {
    color : white;
    font-size : 20px;
}
div {
    flex-basis : 80px;
    flex-wrap : wrap;
}
.routes {
    position : relative;
}
a::before {
    content : "";
    position : absolute;
    border : 2px solid white;
    left : 0rem;
    top : 1.8rem;
    width : 2rem;
    transform-origin : left;
    opacity : 0;
    transition : 100ms ease-in-out;
}
a:hover::before {
    transform : scaleX(200%);
    opacity : 1;
    transition : 100ms ease-in-out; 
}
}
`