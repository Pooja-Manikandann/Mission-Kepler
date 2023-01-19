import React from "react"
import SeasonDisplay from "./SeasonDisplay"
import Loader from "./Components/Loader/Loader"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
  //Instead ofconstructor directly can use below statement babel automatically does this
  // state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      positionError => this.setState({ errorMessage: positionError.message })
    )
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    else if (!this.state.lat && this.state.errorMessage) {
      return <div>Error message: {this.state.errorMessage}</div>
    }
    else {
      return (
        <Loader />
      )
    }
  }


  render() {
    return (
      <div>
        {this.renderContent()}
      </div>

    )

  }
}

export default App;
