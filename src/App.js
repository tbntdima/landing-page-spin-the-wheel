import React from 'react';
import styled from 'styled-components';
import { Row, Col, Image } from 'react-bootstrap';
import Footer from './components/Footer';
import SpinTheWheel from './components/SpinTheWheel/';

import backgroundImage from './images/background.png';
import titleImage from './images/title.png';
import coinsImage from './images/coins.png';

const Title = styled.div`
  position: relative;
  z-index: 11;
  margin-bottom: -140px;
  text-align: center;

  @media (max-width: 740px) {
    margin-bottom: -18.5vw;
  }
`;

const TopContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 0;
  background: url(${backgroundImage}) center center / cover no-repeat;
`;

const Coins = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => (props.visible ? 'scale(1)' : 'scale(0)')};
  transition: 1s;
`;

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
          <TopContainer>
            <Title>
              <Image
                src={titleImage}
                alt="Spin the wheel & find your fortune"
              />
            </Title>
            <SpinTheWheel
              isSpinning={this.state.isSpinning}
              spinsAmount={3}
              spinDuration={3}
              setSpinningStatus={this.setSpinningStatus}
            />
            <Coins visible={!this.state.isSpinning && !this.state.firstSpin}>
              <img src={coinsImage} alt="" />
            </Coins>
          </TopContainer>
        </Col>
        <Col xs={12} style={{ background: 'black' }}>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default App;
