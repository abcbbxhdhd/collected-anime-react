import React, { useEffect, useState } from "react"
import AnimeCard from "./components/AnimeCard"
import { useSearchParams, useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import axios from "axios"
import "./ListPage.css"
import PageChangeSection from "./components/PageChangeSection"

export default function ListPage() {
    
    const [searchParams, setSearchParams] = useSearchParams()
    const [animes, setAnimes] = useState([])
    const page = searchParams.get("p")
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const limit = 12
            const offset = 12 * page - 12
            const response = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${offset}`)
            const result = response.data.data
            setAnimes(result)
        }
        fetchData()
    }, [page])

    function forward() {
        const nextPage = Number(page) + 1
        navigate(`/animes?p=${nextPage}`)
    }

    function back() {
        const prevPage = Number(page) - 1
        navigate(`/animes?p=${prevPage}`)
    }

    function cardClick(id) {
        navigate(`/animes/${id}`)
    }

    const animeToRender = animes.map(anime => {
        return <AnimeCard 
                    key={anime.id} 
                    animeTitle={anime.attributes.titles.en_jp}
                    posterUrl={anime.attributes.posterImage.medium}
                    onClick={() => cardClick(anime.id)}/>
    })


    return (
        <div className="list--page">
            <Header />
            <div className="anime--grid">
                {animeToRender}
            </div>
            <PageChangeSection pageNumber={page} back={back} forward={forward}/>
        </div>
    )
}