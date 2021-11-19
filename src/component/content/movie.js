import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Main = styled.div`
    color : white;
    width : 350px;
    display : flex;
    flex-direction: column;
    margin-left: 5px;
    margin-right: 5px;
    padding : 15px;
`;
const Poster = styled.img`
    width : 320px;
    height : 450px;
    border : 2px solid black;
    border-radius: 8px;
    opacity : 0.7;
    &:hover{
        opacity:1;
    }
`;
const Words = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center ;
`;

const Title = styled.h1`
    font-size: 25px;
    display: flex;

`;

const Starring = styled.h3`
    font-size : 15px;
`;

const Container=styled.div`

    margin-top : 15px;
    display:${(props) => {
        if(props.display){ // if True
            return "inline-block";
        } else{
            return "none";
        }
    }
    }


`;

const Summary = styled.p`
    margin-top: 10px;
    text-align: justify;
`;


const AddtoWishlist = styled.button`
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    &:hover{
        background-color: black;
        color:white;
    }
`;

const YearGenre = styled.p`
    text-align :center;
    margin-top : 5px;
`;

const Rating = styled.p`
    color: pink;
    text-align: center;
`;

function MovieObject(props){
    const[showSummary, setShowSummary] = useState(false);

    useEffect (()=>{
        console.log("Bruh")
    });

    function alternateShowSummary(){
        setShowSummary((prevShowSummary) => !prevShowSummary);
    }

    return(
        <Main>
            <Poster onClick= {alternateShowSummary} src={props.poster}/>
            <Words>
                <Title>{props.title}</Title>
                <Title>{props.korean}</Title>
                <Starring>{props.starring}</Starring>
                <AddtoWishlist onClick={()=>{props.addtowishlist(props.title)}}> Add to Wishlist </AddtoWishlist>
                <Container display={showSummary}>
                    <Rating>{props.mdl}</Rating>
                    <Rating>{props.personal}</Rating>

                    <YearGenre>{props.year}</YearGenre>
                    <YearGenre>{props.genre}</YearGenre>

                    <Summary>{props.summary}</Summary>
                </Container>
            </Words>
        </Main>
    )
}

export default MovieObject;