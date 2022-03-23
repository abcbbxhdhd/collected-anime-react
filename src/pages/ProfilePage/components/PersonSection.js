import React, {useState, useEffect} from "react"
import "./ProfileComponents.css"
import { useSelector, useDispatch } from "react-redux"
import { setProfileNickname } from "../../../redux/profileReducer"

export function PersonSection() {

    const [nickname, setNickname] = useState("")
    const profile = useSelector(state => state.profile)
    const [isEditing, setIsEditing] = useState(profile.nickname === "")
    const dispatch = useDispatch()

    function onNicknameChange(e) {
        setNickname(e.target.value)
    }

    function onSave() {
        dispatch(setProfileNickname(nickname))
        setIsEditing(false)
    }

    function onEdit() {
        setIsEditing(true)
    }
    
    return (
        <div className="person--section">
            <i className="ri-account-box-fill"></i> 
            {isEditing &&
            <div className="nickname--section">
                <input className="nickname--input" type="text" value={nickname} onChange={onNicknameChange}/>
                <i onClick={onSave} className="ri-save-line"></i> 
            </div>
            }
             {!isEditing &&
            <div className="nickname--section">
                <h3 className="nickname--text">{profile.nickname}</h3>
                <i onClick={onEdit} className="ri-pencil-line"></i>  
            </div>
            }
        </div>
    )
}