import React from "react";
import styled from "styled-components";

import { Grid } from "@material-ui/core";

import Card from "../elements/Card";
import Heading from "../elements/Heading";

import "../../i18n/i18n";
import { useTranslation } from "react-i18next";

const Cards = styled.div`
  div {
    margin-right: 20px;

    @media only screen and (max-width: 959px) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;

interface Props {
  data: any;
}

const Info: React.FC<Props> = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const { t } = useTranslation<string>();

  if (!confirmed) {
    return null;
  }

  return (
    <>
      <Heading main>{t("info")}</Heading>
      <Cards>
        <Grid container spacing={3} justify="center">
          <Card cardTitle={t("confirmed")} value={confirmed.value} lastUpdate={lastUpdate} cardSubtitle={t("confirmed_desc")} />
          <Card cardTitle={t("recovered")} value={recovered.value} lastUpdate={lastUpdate} cardSubtitle={t("recovered_desc")} />
          <Card cardTitle={t("death")} value={deaths.value} lastUpdate={lastUpdate} cardSubtitle={t("death_desc")} />
        </Grid>
      </Cards>
    </>
  );
};

export default Info;
