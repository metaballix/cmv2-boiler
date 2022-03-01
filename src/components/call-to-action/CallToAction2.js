import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern2.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.dark,
  },
  description: {
    color: theme.palette.background.secondary
  },
  actions: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(2),
    }
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
}));

export default function CTA(props) {
  const classes = useStyles();

  const content = {
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.',
    'primary-action': 'Join the Revolution',
    'secondary-action': 'Read more',
    ...props.content
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} color="common.white">
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="h5" className={classes.description}>{content['description']}</Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex" height="100%" className={classes.actions}>
                <Box my="auto">
                  <Button variant="contained" color="secondary" className={classes.primaryAction}>{content['primary-action']}</Button>
                  <Button variant="outlined" color="secondary">{content['secondary-action']}</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}