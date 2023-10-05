import styled from "styled-components";

export const StyledHeader = styled.div`

display : flex;
flex-direction : column;
width : 100%;
background-color : whitesmoke;




#topContainer {
display : flex;
justify-content : space-evenly;
align-items : center;


min-width : 100%;
max-width : fit-content;

min-height : 5rem;
max-height : fit-content;

padding-left  : 2rem;
padding-right  : 2rem;



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


h2 {
    font-weight : bold;
}


.wrap {
    flex-wrap : wrap;
}



#searchbar {
    position : relative;
    display : flex;


    input {
        width : 50vw;
        border : 1px solid lightgray;
        outline : none;
        padding-left  : .4rem;
        border-radius : 6px;
        margin-right : 1rem;
        &:focus {
            border : none;
            box-shadow : 0 0 5px gray;
            transition : .05s;
        }
    }
     form {

        .icons {
            width : 1.5rem;
            height : 1.5rem;
            &:hover{
            transform : scale(1.1);
            transition : 50ms ease-in-out;
        }
        }
        .top {
            margin-right : 15px;
        }
    }

#search {
        position : absolute;
        right :5.2rem;
        top : .4rem;
    } 
}



}


@media screen and (max-width: 600px) {
    padding :none !important;
    margin :none !important;
    display : flex;
    h2 {
        margin-bottom : 1rem;
    }
    #topContainer {
        max-height : fit-content;
        display : flex;
        flex-direction : row !important;
        align-items : center;
        padding-top : .7rem;
        padding-bottom : 1rem;
    }

    #searchbar {
        flex-wrap : wrap;
        margin-left : -1rem;
    }
    form {
        display : flex;
        align-items :center !important;
        justify-content : flex-start !important;
        .icons {
            width : 1.5rem;
            height : 1.5rem;
            &:hover{
            transform : scale(1.1);
            transition : 50ms ease-in-out;
        }
        }
        .top {
            margin-right : 15px;
        }
    }
    #searcher {
        width : 70vw !important;
        margin-right : 1rem;
    }
    #search {
        position : absolute;
        right : 5.3rem !important;
        top : .4.2rem !important;
    }
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