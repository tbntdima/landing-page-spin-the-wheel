import React from 'react';
import styled from 'styled-components';

import CouponsTable from './CouponsTable/';
import Terms from './Terms/';

import redLineImage from '../images/red-line.svg';
import { logo as logoImage } from '../data/bonuses';

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 3rem;
  background: #0f0d10;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 32px;
  margin-bottom: 1rem;
  color: #fff;
  font-size: 24px;
  text-align: center;
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'uppercase')};
  line-height: 1;
  background: url('${redLineImage}') center center / 100% no-repeat;

  @media (max-width: 992px) {
    background: none;
  }
`;

const Logo = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <Title>Don’t want to spin? Find your coupon code below:</Title>
    <CouponsTable />
    <Logo>
      <img style={{ maxWidth: '150px' }} src={logoImage} alt="Logo" />
    </Logo>
    <Terms />
  </FooterContainer>
);

export default Footer;
