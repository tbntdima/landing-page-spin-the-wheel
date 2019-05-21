import styled from 'styled-components';
import buttonImage from '../../images/highlighter.png';

const Highlighter = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-100%);
  width: 751px;
  height: calc(751px / 2);
  background: url(${buttonImage}) center center / cover no-repeat;
  cursor: pointer;
  @media (max-width: 751px) {
    width: 100vw;
    height: calc(100vw / 2);
  }
`;

export default Highlighter;
