import React from "react"
import Header from "../components/Header/Header"
import {Link} from "react-router-dom"
import "./MainPage.css"

export default function MainPage() {
    return (
        <div className="main--page">
            <Header/>
            <Link to="/animes?p=1">
                <h1 className="start--link">Start browsing...</h1>
            </Link>
        </div>
    )
}