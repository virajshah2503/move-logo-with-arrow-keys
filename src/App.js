import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

class App extends Component {
  constructor(props){

    super(props);

    this.state = {
      speed : 2,
      left : 5,
      top : 5
    }

    this.changeSpeed = this.changeSpeed.bind(this);
    this.keyPress = this.keyPress.bind(this);
    this.sliderDefault = this.sliderDefault.bind(this);
  }

  sliderDefault(event){
    event.preventDefault();
  }

  componentWillMount(){
    document.addEventListener("keydown",this.keyPress);
  }

  keyPress(event){

    let key = event.keyCode;

    /*Left Arrow*/

    if (key === 37) {
      this.props.moveLeft();
    }

    /*Up Arrow*/

    else if (key === 38) {
      this.props.moveUp();
    }

    /*Right Arrow*/
    else if (key === 39) {
      this.props.moveRight();
    }

    /*Down Arrow*/
    else if (key === 40) {
      this.props.moveDown();
    }
  }

  changeSpeed(event){
    let speed = event.target.value;

    this.props.increaseSpeed(speed);
  }

  render() {

    let logoposition = {
      left : this.props.position.left+"px",
      top : this.props.position.top+"px"
    };

    return (
      <div className="App">
        <div className="project-title">
          Move Logo With Arrow Keys
        </div>
        <div className="logo-move-area">
          <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png" className="App-logo" alt="logo" style={ logoposition }/>
        </div>
        <div className="control-moving-speed">
            <input type="range" min="1" max="50" value={this.props.position.speed} onChange={this.changeSpeed} onKeyDown={this.sliderDefault}/>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    position : state
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    moveLeft : () => dispatch({type : 'MOVE_LEFT'}),
    moveRight : () => dispatch({type : 'MOVE_RIGHT'}),
    moveUp : () => dispatch({type : 'MOVE_UP'}),
    moveDown : () => dispatch({type : 'MOVE_DOWN'}),
    increaseSpeed : (value) => dispatch({type : 'INCREASE_SPEED', value : value})
  };
};

export default connect(mapStatetoProps,mapDispatchtoProps)(App);
