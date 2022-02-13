import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 60px;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    color: var(--gray-900);
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 500;
    text-align: center;
    color: var(--gray-900);
    margin-bottom: 3.75rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    max-width: 1120px;

    align-items: center;
    justify-content: center;
  }
`;
