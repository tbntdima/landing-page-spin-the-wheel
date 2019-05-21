import styled from 'styled-components';
import buttonImage from '../../images/button.png';

const Button = styled.a`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 247px;
  height: 290px;
  background: url(${buttonImage}) center center / cover no-repeat;
  cursor: pointer;
  @media (max-width: 751px) {
    width: calc(24700vw / 751);
    height: calc((24700vw / 751) * 290 / 247);
  }
`;

export default Button;
