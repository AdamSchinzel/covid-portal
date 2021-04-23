import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "../elements/Button";
import Logo from "../../assets/logo.png";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 75px;
  width: 100%;
`;

const Header: React.FC = () => {
  const { t } = useTranslation<string>();

  return (
    <HeaderDiv>
      <img src={Logo} alt="Logo" width="100" height="100" />
      <Link to="/about">
        <Button>{t("about")}</Button>
      </Link>
    </HeaderDiv>
  );
};

export default Header;
