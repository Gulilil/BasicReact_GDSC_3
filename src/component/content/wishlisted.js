import React, {useState, useEffect} from "react";
import styled from "styled-components";


const Main = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`;

const Title = styled.p`
    font-size: 30px;
    margin-top: 10px;
    margin-bottom : 10px;
`;

const DeleteButton =styled.button`
    height: 50px;
    width :75px;
    border-radius: 20px;
    &:hover{
        background-color: black;
        color:white;
`;

const Container = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    padding : 15px;
    flex-direction: column;
    width : 600px;
    border : 3px solid whitesmoke;
    border-radius: 50px;
    margin-top: 15px;
`;


function wishlisted(props){
    return(
        <Main>
            <Container>
                <Title>{props.title}</Title>
                <DeleteButton onClick ={() => {props.removefromwishlist(props.title)}}> Delete </DeleteButton>
            </Container>
        </Main>
    )
}

export default wishlisted;