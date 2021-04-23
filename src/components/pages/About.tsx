import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Default from "../layouts/Default";
import Heading from "../elements/Heading";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

import { Icon } from "ts-react-feather-icons";

const Back = styled.div`
  display: flex;
  margin-top: 75px;
  align-items: center;

  > a {
    text-decoration: none;
  }

  p {
    color: ${(props) => props.theme.brand_color};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const About: React.FC = () => {
  const { t } = useTranslation<string>();

  return (
    <Default>
      <Heading>{t("about_title")}</Heading>
      <p>{t("about_desc")}</p>
      <br></br>
      <p>Tech stack:</p>
      <br></br>
      <p>- Front-end: React (TypeScript)</p>
      <p>- {t("testing")}: Storybook</p>
      <p>- {t("issue")}: Sentry</p>
      <p>- {t("style")}: Styled-components</p>
      <p>- {t("http")}: i18next</p>
      <p>- {t("charts")}: Axios</p>
      <p>- {t("translate")}: React-chartjs-2</p>
      <Back>
        <Icon name="arrow-left" color="#FF4F5A" size="20" />
        <Link to="/">
          <p>Zpět</p>
        </Link>
      </Back>
    </Default>
  );
};

export default About;
