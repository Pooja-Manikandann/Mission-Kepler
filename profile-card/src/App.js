import React from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import alexa from "./images/alexa.png"
import cortana from "./images/cortana.png"
import siri from "./images/siri.png"


function App() {
  return (
    <div>
      <h1>Personal digital assistance</h1>

      <ProfileCard title="Alexa" tag="@alexa99" imageUrl={alexa} />
      <ProfileCard title="Cortana" tag="@cortana32" imageUrl={cortana} />
      <ProfileCard title="Siri" tag="@siri01" imageUrl={siri} />

    </div>
  );
}

export default App;
