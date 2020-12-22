import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ confirmed, deaths, recovered, lastUpdate }) => {
  if (!confirmed || !deaths || !recovered) {
    return "Loading...";
  }
  return (
    <Grid container className={styles.container}>
      <Grid item xs={false} sm={1} md={2} />
      <Grid item container xs={12} sm={10} md={8} spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" className={styles.confirmed}>
            <CardContent className={styles.content}>
              <Typography color="textPrimary" gutterBottom>
                Total Cases
              </Typography>

              <Typography color="textPrimary" gutterBottom>
                <CountUp
                  start={0}
                  end={parseInt(confirmed)}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                <span>Last Updated</span>
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" className={styles.deaths}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Total Deaths:
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                <CountUp
                  start={0}
                  end={parseInt(deaths)}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Last Updated
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card variant="outlined" className={styles.recovered}>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Total Recovered:
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                <CountUp start={0} end={parseInt(recovered)} separator="," />
              </Typography>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Last Updated
              </Typography>
              <Typography color="textPrimary" gutterBottom>
                {new Date(lastUpdate).toDateString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={false} sm={1} md={2} />
    </Grid>
  );
};

export default Cards;
