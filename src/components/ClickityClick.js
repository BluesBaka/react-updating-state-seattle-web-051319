// Code ClickityClick Component Here
import React from 'react';


class ClickityClick extends React.Component {
  constructor() {
    super()

      this.state = {
        hasBeenClicked: false
    };
  }

    handleClick = () => {
      console.log("ewww, don't lick me")
      this.setState({
        hasBeenClicked: true
      })
    }
render(){
  return(
    <div id="clicky">
    <h1> Give me meaning</h1>
    <p>I have {this.state.hasBeenClicked? null : 'not'} been clicked!</p>
    <button onClick={this.handleClick}>Click Here</button>
    </div>

  )
}

}
export default ClickityClick;
