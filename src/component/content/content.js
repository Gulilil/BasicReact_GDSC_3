import React, {useState} from "react";
import styled from "styled-components";

import movieData from "./moviesData";
import MovieObject from "./movie";
import Wishlisted from "./wishlisted";

const Main = styled.div`
    color:white;
    padding : 8px;
`;

const Container = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content: center;
`;

const WishlistButton = styled.button`
    position : fixed;
    height : 40px;
    width : 120px;
    bottom : 0%;
    border-radius: 10px;
    &:hover{
        background-color:powderblue ;
    }
`;

const UpTitle = styled.p`
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    margin-bottom: 20px;
`;



function Content(){

    const[isMovieList, setIsMovieList] = useState(true);
    const[wishlist,setwishlist] = useState([]);


    function alternateList(){
        setIsMovieList((prevIsMovieList) => !prevIsMovieList)
    }

    function addtowishlist(addedMovieTitle){
        setwishlist((prevwishlist) =>{
            let isInWishlist = false;
            for (const wishlistedMovie of prevwishlist){ //ngeloop buat nyari apakah udah ada
                if(addedMovieTitle === wishlistedMovie){
                    isInWishlist = true; // kalo ada ya variabel in Wishlist jadi true
                    break
                }
            }
            if (isInWishlist){ //kalo uda ada di wishlist, dibalikin ke kondisi sebelumnya, jadi ga dimasukin
                return prevwishlist
            } else { // kalo belom ada di di wishlist, ya dimasukin
                return prevwishlist.concat(addedMovieTitle);
            }
        })
    }

    function removefromwishlist (removedMovieTitle){
        setwishlist((prevwishlist) => {
            return prevwishlist.filter((value,index,arr) => {
                return value !== removedMovieTitle;
            })
        })
    }


    function movieMaker(){
        let movieList = [];
        for (const movie of movieData){
            movieList.push(<MovieObject title={movie.title} poster={`${movie.poster}`} korean={movie.korean} 
            starring={movie.star} summary={movie.summary} mdl= {movie.mdlrate} personal={movie.personalrate}
            year={movie.year} genre={movie.genre} mdllink={movie.mdllink} trailer={movie.trailer}
            addtowishlist={addtowishlist}/> ) //Kalo mau ada 2 string gabung, gabunginnya ->  posterPath=`${IMAGE_URL}${movie.poster_path}`
        }
        return movieList;
    }

    function wishlistObjectMaker (){
        let wishlistObjectList = [];
        for (const movieTitle of wishlist){
            wishlistObjectList.push(<Wishlisted title={movieTitle} removefromwishlist={removefromwishlist}/>)
        }
        return wishlistObjectList;
    }

    if (isMovieList){ //if True
        return(
            <Main>
                <Container>
                    {movieMaker()}
                </Container>
                <WishlistButton onClick={alternateList}>Check Wishlist</WishlistButton>
            </Main>
        )

    } else {
        return(
            <Main>
                <UpTitle>- Your Wishlist -</UpTitle>
                {wishlistObjectMaker()}
                <WishlistButton onClick={alternateList}>Back to Movie list</WishlistButton>
            </Main>
        )
    }


};

export default Content;