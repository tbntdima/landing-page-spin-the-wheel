import styled from 'styled-components';
import backgroundImage from '../images/background.jpg';

export default styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 0;
  background: url(${backgroundImage}) center center / cover no-repeat;
`;
