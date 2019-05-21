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
          className="position-relative overflow-hidden d-flex flex-column align-items-center justify-content-center"
          style={{ background: 'blue', minHeight: '100vh' }}
        >
          <div
            style={{
              marginBottom: '-100px',
              position: 'relative',
              zIndex: 10,
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
