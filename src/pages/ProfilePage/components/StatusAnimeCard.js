import React from "react"

export default function StatusAnimeCard(props) {

    return (
        <div className="status--anime--card">
            <div className="status--anime--info">
                <img className="status--anime--poster" src={props.poster}></img>
                <h2 className="status--anime--title">{props.title}</h2>
            </div>
            <i onClick={props.onDelete} className="ri-delete-bin-5-line"></i> 
        </div>
    )
}