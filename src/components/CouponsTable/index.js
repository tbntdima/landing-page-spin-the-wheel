import React from 'react';
import styled from 'styled-components';

import cardBackgroundImage from '../../images/coupon-card-background.png';
import bonuses from '../../data/bonuses';
const sortedBonuses = bonuses.sort((a, b) => a.tableOrder - b.tableOrder);

const CouponsTableContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  padding: 1rem;

  @media (max-width: 1200px) {
    overflow-x: scroll;
  }
`;

const CouponCard = styled.a`
  background: #123f70;
  min-width: 133px;
  width: 133px;
  height: 279px;
  margin: 0 2.5px;
  background: url(${cardBackgroundImage}) center center / cover no-repeat;
  transition: 0.3s;
  text-decoration: none;
  &:hover {
    transform: translateY(-0.5rem);
    text-decoration: none;
  }
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  margin: ${props => (props.margin ? props.margin : '0 0 5px')};
  padding: ${props => (props.padding ? props.padding : '0 20px')};
  color: ${props => (props.color ? props.color : 'white')};
  font-size: ${props => (props.fontSize ? props.fontSize : '17px')};
  text-align: center;
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'uppercase')};
  line-height: 1;
`;

const Box = styled.div`
  height: ${props => props.height}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CouponsTable = () => {
  return (
    <CouponsTableContainer>
      {' '}
      {sortedBonuses.map(bonus => (
        <CouponCard key={bonus.id} href={bonus.url}>
          <Box height="166px">
            <Text fontSize="30px" color="#fcf900" margin="16px 0 0">
              {bonus.bonus}
            </Text>
            {bonus.name ? (
              <Text fontSize="19px" color="#fcf900">
                bonus
              </Text>
            ) : (
              ''
            )}
            <Text fontSize="19px">{bonus.description}</Text>
            <Text color="#00baff">{bonus.name}</Text>
          </Box>
          <Box height="81px">
            <Text>Use code:</Text>
            <Text color="#70ff95">{bonus.code}</Text>
          </Box>
          <Box height="32px">
            <Text fontSize="14px" color="#6498d0">
              Deposit {bonus.deposit}
            </Text>
          </Box>
        </CouponCard>
      ))}
    </CouponsTableContainer>
  );
};

export default CouponsTable;
