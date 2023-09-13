import React, { Component } from 'react';

class RandomTemperatura extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0,
    };
  }

  componentDidMount() {
    this.generateRandomNumber(); 
    this.interval = setInterval(this.generateRandomNumber, 1000); 
  }

  componentWillUnmount() {
    clearInterval(this.interval); 
  }

  generateRandomNumber = () => {
    const min = -30;
    const max = 50;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.setState({ randomNumber });
  };

  render() {
    return (
      <div>
        <h1>Temperatura:</h1> {this.state.randomNumber}
      </div>
    );
  }
}

export default RandomTemperatura;
