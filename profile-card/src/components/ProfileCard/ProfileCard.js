import React from "react";
import "./profileCard.css"

function ProfileCard(props) {
    let { title, tag, imageUrl } = props;
    return (
        <div className="card-wrapper">
            <img src={imageUrl} alt="profile-pic" />
            <p>{title}</p>
            <p>{tag}</p>
        </div>
    )
}

export default ProfileCard;