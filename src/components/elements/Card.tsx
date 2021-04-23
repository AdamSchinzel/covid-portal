import React from "react";
import CountUp from "react-countup";

import { Card, CardContent, Grid } from "@material-ui/core";
import Heading from "../elements/Heading";

interface Props {
  cardTitle: string;
  cardSubtitle: string;
  value: number;
  lastUpdate: string;
}

const CardComponent: React.FC<Props> = ({ cardTitle, cardSubtitle, value, lastUpdate }) => (
  <Grid item xs={8} md={3} component={Card}>
    <CardContent>
      <p>{cardTitle}</p>
      <Heading>
        <CountUp start={0} end={value} duration={2} separator=" " />
      </Heading>
      <p>{new Date(lastUpdate).toLocaleDateString()}</p>
      <p>{cardSubtitle}</p>
    </CardContent>
  </Grid>
);

export default CardComponent;
