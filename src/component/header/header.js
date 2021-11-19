import React from "react";
import styled from "styled-components";

import logo from "./logo.jpg";
import dramas1 from "./dramas1.jpg";
import dramas3 from "./dramas3.jpg";

const Back = styled.div`
    position : relative;
    overflow : hidden;
    background-color: white;
    margin-bottom: 25px;
`;

const Bgimage = styled.div`
    display : flex;
    flex-direction:row;

`;
const Main = styled.div`
    border : 3px solid black;
    border-radius : 8px;
    position : relative;
    padding : 15px;
    & * {
        
    }

`;

const Logo = styled.img`
    height: 100px;
    width : 75px;
    margin-right : 15px;
    margin-left : 15px;
`;


const Title = styled.h1`
    background-color: white;
    color : black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`;

const Subtitle = styled.h1`
    background-color: white;
    color : black;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size : 20px;
    color : crimson;

`;

const Heightcenter = styled.div`
    display : flex;
    align-items: center;
    flex-direction : column;
    border : 1px;
    border-radius: 10px;
`;

const Dramasright = styled.img`
    width :500px;
    height : 150px;
    opacity : 0.9;
    position: Absolute; top: 0px; right: 0px; 
`;

const Dramasleft = styled.img`
    width :450px;
    height : 150px;
    opacity : 0.9;
    position: Absolute; top: 0px; left: 0px; 
`;

const Box = styled.div`
    padding : 5px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

function Header (){
    return (
        <Back>
            <Dramasright src={dramas1}/>
            <Dramasleft src={dramas3}/>
            <Main>
                <Box>
                    <Logo src={logo} />
                    <Heightcenter>
                        <Title> Daia-Mondo K-Dramas List</Title>
                        <Subtitle>Your Favorite List</Subtitle>
                    </Heightcenter>
                    <Logo src={logo} />
                </Box>
            </Main>
        </Back>
        
        
    )
}

export default Header;