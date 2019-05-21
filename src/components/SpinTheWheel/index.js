import React from 'react';
import bonuses, { getRandomBonus } from './bonuses';

import Container from './Container';
import Wheel from './Wheel';
import Highlighter from './Highlighter';
import Button from './Button';

class SpinTheWheel extends React.Component {
  state = {
    bonus: bonuses[0],
    currentWheelPosition: 0,
    nextWheelPosition: 0
  };

  spin = () => {
    const spinsAmount = this.props.spinsAmount;
    const bonus = getRandomBonus();
    const currentWheelPosition = this.state.nextWheelPosition;
    const nextWheelPosition =
      currentWheelPosition < 360
        ? 360 * spinsAmount + bonus.wheelPosition
        : Math.ceil(currentWheelPosition / 360) * 360 +
          spinsAmount * 360 +
          bonus.wheelPosition;

    this.setState({
      bonus,
      currentWheelPosition,
      nextWheelPosition
    });
  };

  render() {
    const { nextWheelPosition, currentWheelPosition } = this.state;
    console.log(this.state);

    return (
      <Container>
        <Wheel
          currentWheelPosition={currentWheelPosition}
          nextWheelPosition={nextWheelPosition}
          spinDuration={this.props.spinDuration}
        />
        <Highlighter />
        <Button onClick={this.spin} />
      </Container>
    );
  }
}

export default SpinTheWheel;
