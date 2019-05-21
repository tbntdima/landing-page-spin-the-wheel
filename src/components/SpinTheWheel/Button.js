import styled from 'styled-components';
import buttonImage from './images/button.png';

const Button = styled.button.attrs(props => ({
  disabled: props.disabled
}))`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 247px;
  height: 290px;
  border: none;
  outline: none;
  background: url(${buttonImage}) center center / cover no-repeat;
  box-shadow: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &:active,
  &:focus {
    outline: none;
  }
  @media (max-width: 751px) {
    width: calc(24700vw / 751);
    height: calc((24700vw / 751) * 290 / 247);
  }
`;

export default Button;
