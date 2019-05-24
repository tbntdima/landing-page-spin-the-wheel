import React from 'react';
import bonuses, { getRandomBonus } from '../../data/bonuses';

import Container from './Container';
import Wheel, { WheelBackground } from './Wheel';
import Highlighter from './Highlighter';
import Button from './Button';

class SpinTheWheel extends React.Component {
  state = {
    bonus: bonuses[0],
    currentWheelPosition: 0,
    nextWheelPosition: 0
  };

  spin = () => {
    const {
      spinsAmount,
      spinDuration,
      coinsAnimationDuration,
      setSpinStatus,
      setBonus
    } = this.props;

    const bonus = getRandomBonus();
    setBonus(bonus);

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

    setSpinStatus('spinning');

    setTimeout(() => {
      setSpinStatus('animatingCoins');
      setTimeout(() => {
        setSpinStatus('complete');
      }, coinsAnimationDuration * 1000);
    }, spinDuration * 1000);
  };

  render() {
    const { nextWheelPosition, currentWheelPosition } = this.state;
    const { spinStatus } = this.props;
    console.log(this.state);

    return (
      <Container>
        <WheelBackground />
        <Wheel
          currentWheelPosition={currentWheelPosition}
          nextWheelPosition={nextWheelPosition}
          spinDuration={this.props.spinDuration}
        />
        <Highlighter />
        <Button onClick={this.spin} disabled={spinStatus !== 'idle'} />
      </Container>
    );
  }
}

export default SpinTheWheel;
