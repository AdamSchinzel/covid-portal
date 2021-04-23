import React from "react";
import styled from "styled-components";

import Header from "../modules/Header";

const Container = styled.div`
  max-width: 1300px;
  padding-left: 1.4rem;
  padding-right: 1.4rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 40px;
  height: 100%;
`;

interface Props {
  children: React.ReactNode;
  about?: boolean;
}

const Default: React.FC<Props> = ({ children, about }) => {
  return (
    <Container>
      <Header about={about} />
      {children}
    </Container>
  );
};

export default Default;
