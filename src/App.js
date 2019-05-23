import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Footer from './components/Footer';
import SpinTheWheel from './components/SpinTheWheel/';

class App extends React.Component {
  state = {
    isSpinning: false
  };

  setSpinningStatus = isSpinning => {
    this.setState({
      isSpinning
    });
  };

  render() {
    return (
      <Row noGutters>
        <Col
          xs={12}
          style={{
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            background: ''
          }}
        >
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              marginBottom: '-100px',
              textAlign: 'center'
            }}
          >
            <h1>
              Spin the wheel <br /> & find your fortune
            </h1>
            <p>get up to a 350% bonus</p>
          </div>
          <SpinTheWheel
            isSpinning={this.state.isSpinning}
            spinsAmount={1}
            spinDuration={1}
            setSpinningStatus={this.setSpinningStatus}
          />
        </Col>
        <Col xs={12} style={{ background: 'black' }}>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default App;
