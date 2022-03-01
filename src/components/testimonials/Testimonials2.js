import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 48,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

export default function Testimonials(props) {
  const classes = useStyles();

  const content = {
    'header': 'LOREM IPSUM DOLOR SIT AMET CONSECTUTAR',
    'logo1': 'nereus-assets/img/logos/apple.svg',
    'logo2': 'nereus-assets/img/logos/facebook.svg',
    'logo3': 'nereus-assets/img/logos/marvel.svg',
    'logo4': 'nereus-assets/img/logos/react.svg',
    'logo5': 'nereus-assets/img/logos/nike.svg',
    'logo6': 'nereus-assets/img/logos/airbnb.svg',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={3}>
          <Box mb={2}>
            <Typography variant="overline" component="h3" color="textSecondary" align="center">{content['header']}</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content['logo1']} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content['logo2']} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content['logo3']} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content['logo4']} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content['logo5']} alt="" className={classes.logo} />
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <img src={content['logo6']} alt="" className={classes.logo} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}