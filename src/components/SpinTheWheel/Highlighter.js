import styled from 'styled-components';
import buttonImage from '../../images/highlighter.png';

const Highlighter = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-100%);
  width: 600px;
  height: calc(600px / 2);
  background: url(${buttonImage}) center center / cover no-repeat;
  @media (max-width: 600px) {
    width: 100vw;
    height: calc(100vw / 2);
  }
`;

export default Highlighter;
