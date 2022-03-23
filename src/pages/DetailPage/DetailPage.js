import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Header from "../components/Header/Header"
import AnimeDetailSection from "../ListPage/components/AnimeDetailSection"

export default function DetailPage() {
    const [anime, setAnime] = useState([])
    const {animeId} = useParams()

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://kitsu.io/api/edge/anime/${animeId}`)
            const result = response.data.data
            setAnime(result)
        }
        fetchData()
    }, [])

    return (
        <div className="detail--page">
            <Header/>
            {anime.id && <AnimeDetailSection
                        id={anime.id}
                        key={anime.id}
                        poster={anime.attributes.posterImage.medium}
                        title={anime.attributes.titles.en_jp}
                        description={anime.attributes.description}/>}
        </div>    
    )
}