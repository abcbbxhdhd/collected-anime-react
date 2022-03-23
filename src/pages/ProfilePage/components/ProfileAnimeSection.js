import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./ProfileComponents.css"
import StatusAnimeCard from "./StatusAnimeCard"
import { removeFavorite, removeSeen, removeInProgress } from "../../../redux/animeStatusReducer"

export default function ProfileAnimeSection() {
    const statuses = useSelector(state => state.statuses)
    const dispatch = useDispatch()
    const [selectedTab, setSelectedTab] = useState(0)

    const animeToRender = () => {
        if (selectedTab === 0) {
            return statuses.favorite.map(fav => {
                return <StatusAnimeCard id={fav.id} key={fav.id} poster={fav.poster} title={fav.title} onDelete={() => dispatch(removeFavorite(fav.id))}/>
            })
        } else if (selectedTab === 1) {
            return statuses.seen.map(seen => {
                return <StatusAnimeCard id={seen.id} key={seen.id} poster={seen.poster} title={seen.title} onDelete={() => dispatch(removeSeen(seen.id))}/>
            })
        } else {
            return statuses.inProgress.map(pr => {
                return <StatusAnimeCard id={pr.id} key={pr.id} poster={pr.poster} title={pr.title} onDelete={() => dispatch(removeInProgress(pr.id))}/>
            })
        }
    }

    return (
        <div className="profile--anime--section">
            <div className="status--nav">
                <h4 className={selectedTab === 0 ? "tab-focused" : "tab"} onClick={() => setSelectedTab(0)}>Favorite</h4>
                <h4 className={selectedTab === 1 ? "tab-focused" : "tab"} onClick={() => setSelectedTab(1)}>Seen</h4>
                <h4 className={selectedTab === 2 ? "tab-focused" : "tab"} onClick={() => setSelectedTab(2)}>In progress</h4>
            </div>
            <div className="anime--status--grid">
                {animeToRender()}
            </div>
        </div>
    )
}
