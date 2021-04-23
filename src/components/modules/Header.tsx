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

interface Props {
  about?: boolean;
}

const Header: React.FC<Props> = ({ about }) => {
  const { t } = useTranslation<string>();

  return (
    <HeaderDiv>
      <Link to="">
        <img src={Logo} alt="Logo" width="100" height="100" />
      </Link>
      {!about && (
        <Link to="/about">
          <Button>{t("about")}</Button>
        </Link>
      )}
    </HeaderDiv>
  );
};

export default Header;
