import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import Coins from './components/Coins';
import SpinTheWheel from './components/SpinTheWheel/';
import ModalBonus from './components/ModalBonus';

import titleImage from './images/title.png';
import coinsImage from './images/coins.png';

import bonuses from './data/bonuses';

class App extends React.Component {
  state = {
    bonus: bonuses[0],
    spinStatus: 'idle'
  };

  setBonus = bonus => {
    this.setState({
      bonus
    });
  };

  setSpinStatus = spinStatus => {
    // Possible spinStatuses: idle, spinning, animatingCoins, compolete
    this.setState({
      spinStatus
    });
  };

  resetSpinStatus = () => {
    this.setState({
      spinStatus: 'idle'
    });
  };

  componentDidMount() {
    window.addEventListener('DOMContentLoaded', event => {
      const coupons = bonuses.map(bonus => bonus.image);
      coupons.forEach(coupon => {
        const img = new Image();
        img.src = coupon;
      });
    });
  }

  render() {
    const { bonus, spinStatus } = this.state;
    // console.log(spinStatus);
    return (
      <Row noGutters style={{ overflow: 'hidden' }}>
        <Col xs={12}>
          <Body>
            <Header>
              <img src={titleImage} alt="Spin the wheel & find your fortune" />
            </Header>
            <SpinTheWheel
              spinsAmount={3}
              spinDuration={3}
              coinsAnimationDuration={1}
              spinStatus={spinStatus}
              setSpinStatus={this.setSpinStatus}
              setBonus={this.setBonus}
            />
            <Coins
              scaleDuration={1}
              visible={
                spinStatus === 'animatingCoins' || spinStatus === 'complete'
              }
            >
              <img src={coinsImage} alt="Coins" />
            </Coins>
          </Body>
        </Col>
        <Col xs={12}>
          <Footer />
        </Col>
        {/* Modals */}
        <ModalBonus
          bonus={bonus}
          spinStatus={spinStatus}
          resetSpinStatus={this.resetSpinStatus}
        />
      </Row>
    );
  }
}

export default App;
