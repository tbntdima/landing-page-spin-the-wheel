import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  z-index: 10;
  overflow: hidden;
  width: 600px;
  max-width: 100%;
  height: 600px;
  max-height: 100%;
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vw;
  }
`;

export default Container;
