import React from "react"
import Header from "../components/Header/Header"
import { PersonSection } from "./components/PersonSection"
import ProfileAnimeSection from "./components/ProfileAnimeSection"
import "./ProfilePage.css"

export default function ProfilePage() {
    
    return (
        <div className="profile--page">
            <Header />
            <PersonSection />
            <ProfileAnimeSection />
        </div>
    )
}