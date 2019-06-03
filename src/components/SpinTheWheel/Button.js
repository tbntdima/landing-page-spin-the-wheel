import styled from 'styled-components';
import buttonImage from '../../images/button.png';
import buttonImageActive from '../../images/button-active.png';

const Button = styled.button.attrs(props => ({
  disabled: props.disabled
}))`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  filter: blur(0.000001px);
  display: block;
  width: 198px;
  height: 243px;
  border: none;
  outline: none;
  background-color: transparent;
  background-image: ${props =>
    props.disabled
      ? `url(${buttonImageActive})`
      : `url(${buttonImage}),url(${buttonImageActive})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  &:active,
  &:focus {
    outline: none;
  }
  @media (max-width: 751px) {
    width: calc(198 * 100vw / 751);
    height: calc((198 * 100vw / 751) * 243 / 198);
  }
`;

export default Button;
