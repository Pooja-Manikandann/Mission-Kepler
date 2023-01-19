import React from "react"
import "./Loader.css"
function Loader(props) {
    return (
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    )
}

Loader.defaultProps = {
    message: "Loading..."
}

export default Loader