import styled from "styled-components";

import backgroundBanner from "../../assets/images/backgroundBanner.png";

export const Container = styled.main`
  background-image: url(${backgroundBanner});
  background-color: var(--gray-900);
  background-position: center center;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 23.625rem;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

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
