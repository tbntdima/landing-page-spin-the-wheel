import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 751px;
  max-width: 100%;
  height: 751px;
  max-height: 100%;
  background: #fdfdfd;
  @media (max-width: 751px) {
    width: 100vw;
    height: 100vw;
  }
`;

export default Container;
