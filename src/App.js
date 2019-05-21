import React from 'react';
import Layout from './components/Layout';
import SpinTheWheel from './components/SpinTheWheel/';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <SpinTheWheel spinsAmount={3} spinDuration={5} />
      </Layout>
    );
  }
}

export default App;
