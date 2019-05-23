import styled, { keyframes } from 'styled-components';
import wheelImage from './images/wheel.png';

const spin = (nextWheelPosition, currentWheelPosition) => {
  return keyframes`
    from {
      transform: rotate(${currentWheelPosition}deg);
    }
    to {
      transform: rotate(${nextWheelPosition}deg);
    }
  `;
};

const Wheel = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${wheelImage}) center center / cover no-repeat;
  transform: rotate(${props => props.currentWheelPosition}deg);
  animation-name: ${props =>
    spin(props.nextWheelPosition, props.currentWheelPosition)};
  animation-duration: ${props => props.spinDuration}s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.44, 0.14, 0.58, 1.11);
  /* animation-timing-function: linear; */
`;

export default Wheel;
