import styled from "styled-components";

export const StyledFeature = styled.div`
background-color : whitesmoke;
height : 60vh;
width : 100%;
display : flex;
flex-direction : column;
justify-content : flex-start;
align-items : center;
height : fit-content;
padding-top : 2rem;
h1 {
    margin-top : 1rem;
}

#wrapper {
margin-top : 3rem;
display : flex;
flex-wrap : wrap;
width : 100%;
justify-content : space-around;
height : fit-content;
border-radius : 3rem;
}
.showcase {
    flex-wrap : wrap;
    display : flex;
    justify-content : flex-start;

    .featBook {
      width : 15rem;
      height : 30rem;
      transition : 50ms ease-in-out;
      border-radius : 3rem;
      &:hover {
        box-shadow : 0 0 1em gray;
        transition : 50ms ease-in-out;
      }
}
.second {
    position : absolute;
    top : 14rem;
    left : 5rem;
    font-weight : bold;
}
}





@media screen and (max-width : 700px) {
    height : fit-content;
    padding-bottom : 3rem;
    margin-top : 0rem;
    #wrapper {
        margin: 0;
    }
    .showcase {
        .featBook {
            flex-basis : 200px;
            width : 70vw;
            margin-bottom : 7rem;
        }
    }   
}
`