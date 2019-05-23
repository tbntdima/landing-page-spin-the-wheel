import styled from 'styled-components';

export default styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => (props.visible ? 'scale(1)' : 'scale(0)')};
  transition: 1s;
`;
