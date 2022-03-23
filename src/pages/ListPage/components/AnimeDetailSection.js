import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { addFavorite, removeFavorite, addInProgress, removeInProgress, addSeen, removeSeen } from "../../../redux/animeStatusReducer"


export default function AnimeDetailSection(props) {

    const statuses = useSelector(state => state.statuses)
    const dispatch = useDispatch()
    const anime = {
        id: props.id,
        poster: props.poster,
        title: props.title
    }

    const [isFavorite, setIsFavorite] = useState(statuses.favorite.some(fav => fav.id === props.id))
    const [isSeen, setIsSeen] = useState(statuses.seen.some(seen => seen.id === props.id))
    const [isInProgress, setIsInProgress] = useState(statuses.inProgress.some(inProgress => inProgress.id === props.id))

    function toggleFavorite() {
        if (isFavorite) {
            dispatch(removeFavorite(anime.id))
            setIsFavorite(false)
        } else {
            dispatch(addFavorite(anime))
            setIsFavorite(true)
        }
    }

    function styles(param) {
        if (param) {
            return {
                backgroundColor: "black",
                color: "white"
            }
        }
    }

    function toggleInProgress() {
        if (isInProgress) {
            dispatch(removeInProgress(anime.id))
            setIsInProgress(false)
        } else if (!isInProgress && isSeen){
            dispatch(addInProgress(anime))
            dispatch(removeSeen(anime.id))
            setIsInProgress(true)
            setIsSeen(false)
        } else {
            dispatch(addInProgress(anime))
            setIsInProgress(true)
        }
    }

    function toggleSeen() {
        if (isSeen) {
            dispatch(removeSeen(anime.id))
            setIsSeen(false)
        } else if(!isSeen && isInProgress) {
            dispatch(addSeen(anime))
            dispatch(removeInProgress(anime.id))
            setIsSeen(true)
            setIsInProgress(false)
        } else {
            dispatch(addSeen(anime))
            setIsSeen(true)
        }
    }

    return (
        <div className="detail--section">
            <div className="section--left">
                <img className="anime--detail--poster" src={props.poster}></img>
                <div className="detail--status--section">
                    <h3 className="anime--favorite" style={styles(isFavorite)} onClick={toggleFavorite}>Favorite</h3>
                    <h3 className="anime--seen" style={styles(isSeen)} onClick={toggleSeen}>Seen</h3>
                    <h3 className="anime--inprogress" style={styles(isInProgress)} onClick={toggleInProgress}>In progress</h3>
                </div>
            </div>
            <div className="section--center">
                <h2 className="anime--detail--title">{props.title}</h2>
                <p className="anime--detail--description">{props.description}</p>
            </div>
        </div>
    )
}