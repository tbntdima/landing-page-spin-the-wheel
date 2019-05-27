import React from 'react';
import styled from 'styled-components';
import TermsData from '../../data/terms';

import termsImage from '../../images/terms.svg';

const TermsContainer = styled.div`
  position: absolute;
  z-index: 100;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #0e3259;
  color: #95afcb;
  font-size: 14px;
  transform: ${props =>
    props.isVisible ? 'translateY(0)' : 'translateY(100%)'};
  transition: 0.5s;
`;

const TermsContent = styled.div`
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 0 0.5rem;
`;

const TermsButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-100%);
  width: 123px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: url(${termsImage}) center center / cover no-repeat;
  color: #95afcb;
  font-size: 12px;
  &:active,
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    right: 50%;
    transform: translateX(50%) translateY(-100%);
  }
`;

class Terms extends React.Component {
  state = {
    isVisible: false
  };

  toggleTerms = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    return (
      <TermsContainer isVisible={this.state.isVisible}>
        <TermsContent>
          <TermsData />
          <TermsButton onClick={this.toggleTerms}>Terms</TermsButton>
        </TermsContent>
      </TermsContainer>
    );
  }
}

export default Terms;
