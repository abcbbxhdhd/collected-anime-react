import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="app--header">
                 <Link to="/"><i className="ri-home-4-line"></i></Link> 
                 <Link to="/animes?p=1"><i className="ri-search-line"></i></Link> 
                 <Link to="/profile"><i className="ri-account-circle-line"></i></Link> 
        </header>
    )
}