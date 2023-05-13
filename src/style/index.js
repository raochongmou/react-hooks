import { styled } from "styled-components";

export default styled.div`
  h2 {
    color: ${({ theme }) => theme.color};
    font-size: ${({ theme }) => theme.fontSize};
  }
`;
