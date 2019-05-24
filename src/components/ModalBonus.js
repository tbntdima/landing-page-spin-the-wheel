import React from 'react';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

import closeImage from '../images/close.svg';

const CouponContainer = styled.div`
  position: relative;
  max-width: 756px;
  margin: 0 auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  display: block;
  width: 86px;
  height: 86px;
  background: url(${closeImage}) center center / cover no-repeat;
  border: none;
  outline: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  @media (max-width: 992px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 751px) {
    top: -5px;
    right: -5px;
    width: 11vw;
    max-width: 60px;
    height: 11vw;
    max-height: 60px;
  }
`;

const ModalBonus = ({ bonus, spinStatus, resetSpinStatus }) => {
  return (
    <Modal
      show={spinStatus === 'complete'}
      onHide={resetSpinStatus}
      style={{ border: 'none', background: 'transparent' }}
      centered
      size="lg"
    >
      <CouponContainer>
        <a
          href={`https://www.captainjackcasino.com/webplay/?cashier&coupon=${
            bonus.code
          }`}
        >
          <img src={bonus.image} alt="" />
        </a>
        <CloseButton onClick={resetSpinStatus} />
      </CouponContainer>
    </Modal>
  );
};

export default ModalBonus;
