import React from "react"
import "./ListPageComponents.css"

export default function PageChangeSection(props) {
    return (
        <div className="page--change--section">
            <i onClick={props.back} className="ri-arrow-left-circle-line"></i>
            <div className="page--circle">
                <h3>{props.pageNumber}</h3>
            </div>
            <i onClick={props.forward} className="ri-arrow-right-circle-line"></i>
        </div>
    )
}