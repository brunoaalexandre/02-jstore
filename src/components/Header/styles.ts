import styled from "styled-components";

export const Head = styled.header`
  height: 7.5rem;
  background: var(--white-50);
`;

export const SubHead = styled.div`
  width: 100%;
  height: 3.75rem;
  margin: 0 auto;

  background: var(--gray-900);
  color: var(--white-50);

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: var(--white-50);
    font-size: 1rem;
  }
`;

export const HeadContainer = styled.div`
  max-width: 1120px;
  height: 3.75rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--gray-900);
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
