import React from 'react';

import { Row, Col } from 'react-bootstrap';

import Body from './components/Body';
import Header from './components/Header';
import Footer from './components/Footer';
import Coins from './components/Coins';
import SpinTheWheel from './components/SpinTheWheel/';

import titleImage from './images/title.png';
import coinsImage from './images/coins.png';

class App extends React.Component {
  state = {
    firstSpin: true,
    isSpinning: false
  };

  setSpinningStatus = isSpinning => {
    this.setState({
      firstSpin: false,
      isSpinning
    });
  };

  render() {
    return (
      <Row noGutters>
        <Col xs={12}>
          <Body>
            <Header>
              <img src={titleImage} alt="Spin the wheel & find your fortune" />
            </Header>
            <SpinTheWheel
              isSpinning={this.state.isSpinning}
              spinsAmount={3}
              spinDuration={3}
              setSpinningStatus={this.setSpinningStatus}
            />
            <Coins visible={!this.state.isSpinning && !this.state.firstSpin}>
              <img src={coinsImage} alt="Coins" />
            </Coins>
          </Body>
        </Col>
        <Col xs={12} style={{ background: 'black' }}>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default App;
