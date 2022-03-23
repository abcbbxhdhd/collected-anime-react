import React from "react";
import GenreCircle from "./GenreCircle";
import "./ListPageComponents.css"

export default function AnimeCard(props) {
    
    // const genres = props.genres.map(genre => {
    //     return <GenreCircle name={genre.name}/>
    // })

    return (<div onClick={props.onClick} className="card--box">
        <img src={props.posterUrl} className="card--img"></img>
        <h2 className="card--title">{props.animeTitle}</h2>
    </div>)
}