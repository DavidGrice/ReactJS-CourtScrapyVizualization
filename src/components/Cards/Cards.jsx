import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = (data) => {
    let output = Object.values(data)[0];
    let vals = [];
    for (var i = 0; i < output.length; i++) {
        var datum=output[i];
        vals.push(datum);
    }
    var details = vals.map(function(summary,i)  {

    return (
            <div className={styles.container} key={i}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.emails)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Emails</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end = {summary.Emails} duration = {2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary"></Typography>
                            <Typography variant="body2">Number of active Emails</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.reporters)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Reporters</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end = {summary.Reporters} duration = {2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary"></Typography>
                            <Typography variant="body2">Number of Reporters</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.states)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>States</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end = {summary.Locations} duration = {2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary"></Typography>
                            <Typography variant="body2">Number of States</Typography>
                        </CardContent>
                    </Grid>
                </Grid>

            </div>
        )
    });
return details;
}

export default Cards;