import styled from "styled-components";

import backgroundBanner from "../../assets/images/backgroundBanner.png";

export const Container = styled.main`
  background-color: var(--gray-900);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 23.625rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  h2 {
    font-size: 1.025rem;
    font-weight: 500;
    margin-top: 19px;
  }

  h1, h2 {
    text-align: left;
    color: var(--white);
  }
`;
