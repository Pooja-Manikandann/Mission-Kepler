import React from "react"
import "./SeasonDisplay.css"

function SeasonDisplay(props) {

    const seasonConfig = {
        summer: {
            text: "Let's hit beach",
            icon: "sun"
        },
        winter: {
            text: "burr!!! It's cold",
            icon: "snowflake"
        },
    }
    const getSeasons = (month, lat) => {
        if (month > 2 && month < 9) {
            return lat > 0 ? "summer" : "winter"
        }
        else {
            return lat > 0 ? "winter" : "summer"
        }
    }
    const season = getSeasons(new Date().getMonth(), props.lat)

    console.log(season)
    let { icon, text } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`left-icon icon massive ${icon}`} />
            <h1>{text}</h1>
            <i className={`right-icon icon massive ${icon}`} />
        </div>
    )
}

export default SeasonDisplay;