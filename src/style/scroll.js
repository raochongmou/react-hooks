import { styled } from "styled-components";

export default styled.div`
  height: 2000px;
  position: absolute;
  top: ${({ scrollY }) => scrollY + "px"};
`;
