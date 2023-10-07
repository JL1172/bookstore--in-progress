import styled, { css, keyframes } from "styled-components";


const fallingDrop = keyframes`
0%{
    transform : rotateZ(180deg); 
}
50% {

}
100%{
    transform :   translateY(100vh); 
    z-index : 1;
    opacity : 0;
}
`


export const StyledLogin = styled.div`
min-height : 100vh;
height:fit-content;
background-color : rgb(163, 74, 74);
display : flex;
flex-direction : column;
justify-content  :center;
align-items : center;

width : 100%;

form {
    z-index : 2;
    min-height : 60vh;
    height : fit-content;
    width : 29rem;
    background-color : white;
    display : flex; 
    flex-direction : column;
    justify-content : space-evenly;
    align-items : center;

    flex-wrap : wrap;

    border-radius : 10px;

    box-shadow : 0 0 1em white;



    #formContainer {
        display : flex;
        flex-direction : column;
        justify-content : space-around;
        position : relative;

        min-height : 15vh;
        height :fit-content;
        width : 25rem;


    }


    h1 {
        border-bottom : 1px solid whitesmoke;
    }


    input[type=text],input[type=password] {
        border : none;
        background-color : whitesmoke;
        height : 2.3rem;
        border-radius : 2rem;
        padding-left : 1rem;
        width : 100%;
    }


    input[type=submit] {
        border : none;
        background-color : rgb(163, 74, 74);
        width : 15rem;
        height : 3rem;
        color : white;
        font-size : 1em;
        border-radius : 2rem;
  
        &:hover {
            background-color : whitesmoke;
            color : rgb(163, 74, 74);
            transform : scale(105%);
            transition : 100ms ease-in-out;
            
        }
        &:active {
            transform : scale(110%);
            outline : 1px solid lightgray;
            outline-offset : 2rem;
        }
    }
}



.float {
    position : relative;
  
    .floater1 {
        color : gray;

        position : absolute;
        top : .5rem;
        left : 1rem;
        transition : .2s ease-in-out;
        transform : ${props => props.username ? "translateX(18vw)" : ""};
    }
    .floater2 {
        color : gray;

        position : absolute;
        top : .5rem;
        left : 1rem;
        transition : .2s ease-in-out;
        transform : ${props => props.password ? "translateX(18vw)" : ""};
    }
    &:hover {
        .floater1 {
            transform  : translateY(-1.8rem); 
            transition : .3s ease-in-out;
        }
        .floater2 {
            transform  : translateY(-1.8rem); 
            transition : .3s ease-in-out;
        }
     
    }
  input[type=text]:focus,input[type=password]:focus {
    outline : none;
  }
}



#profIcon {
    width : 5rem;
    height : 5rem;
}




.squares {
    color : pink;
    
    transform-origin : top;
    position : absolute;
    width : 3rem;
    opacity : .5;
    height : 3rem;
    animation : ${fallingDrop} 20s linear infinite;
    

    top : -10rem;

}


.squares0 {
    position : absolute;
    left : 50rem;
    
}
.squares1 {
    position : absolute;
    left : 40rem;
    
    animation-delay : 1.4s;
}
.squares2 {
    position : absolute;
    left : 30rem;
    
    animation-delay : 4s;
}
.squares3 {
    position : absolute;
    left : 20rem;
    
  
}
.squares4 {
    position : absolute;
    left : 10rem;
    
    animation-delay : 2s;
}
.squares5 {
    position : absolute;
    right : 30rem;
    
    animation-delay : 5s;
}
.squares6 {
    position : absolute;
    right : 20rem;
    
    animation-delay :10s;
}
.squares7 {
    position : absolute;
    right : 10rem;
    animation-delay : 4s;
}
.squares8 {
    position : absolute;
    left : 50rem;
    animation-delay : 7.5s;
}
.squares9 {
    position : absolute;
    left : 40rem;
    
    animation-delay : 8.5s;
}
.squares10 {
    position : absolute;
    left : 30rem;
    
    animation-delay :7s;
}
.squares11{
    position : absolute;
    left : 20rem;
    
    animation-delay : 11s;
}
.squares12 {
    position : absolute;
    left : 10rem;
    
    animation-delay : 12s;
}
.squares13 {
    position : absolute;
    right : 30rem;
    
    animation-delay : 15;
}
.squares14 {
    position : absolute;
    right : 20rem;
    
    animation-delay : 16s;
}
.squares15 {
    position : absolute;
    right : 10rem;
    animation-delay : 12.7s;
}
.squares16 {
    position : absolute;
    left : 10rem;
    
    animation-delay : 12s;
}
.squares17 {
    position : absolute;
    right : 30rem;
    
    animation-delay : 15;
}
.squares18 {
    position : absolute;
    right : 20rem;
    
    animation-delay : 20s;
}
.squares19 {
    position : absolute;
    right : 10rem;
    animation-delay : 15.2s;
}
.squares20 {
    position : absolute;
    right : 10rem;
    animation-delay : 18s;
}







@media screen and (max-width : 700px) {
    form {
        width : 90vw;
        #formContainer {
            width : 80vw;

        }
    }
    .first {
        margin-bottom : 1rem;
    }
    .floater2 {
        color : gray;

        position : absolute;
        top : .5rem;
        left : 1rem;
        transition : .2s ease-in-out;
        transform : ${props => props.password ? "translateX(50vw)" : ""} !important;
    }
    .floater1 {
        color : gray;

        position : absolute;
        top : .5rem;
        left : 1rem;
        transition : .2s ease-in-out;
        transform : ${props => props.password ? "translateX(50vw)" : ""} !important;
    }
}
`