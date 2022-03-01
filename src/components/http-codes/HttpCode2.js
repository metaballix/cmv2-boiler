import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  contentBox: {
    maxWidth: theme.breakpoints.values['md'],
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(8),
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'] / 2,
      maxHeight: 512,
      paddingTop: theme.spacing(16),
      paddingBottom: theme.spacing(16),
      marginRight: 0,
      textAlign: 'left',
    }
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    height: 512,
    width: '100%'
  }
}));

export default function HttpCode(props) {
  const classes = useStyles();

  const content = {
    'image': 'nereus-assets/img/illustrations/error.svg',
    'code': 'Whoops!',
    'header': 'Something went wrong!',
    'description': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.',
    'primary-action': 'Return to the homepage',
    ...props.content
  };

  return (
    <section>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box className={classes.contentBox}>
            <Container maxWidth="sm">
              <Typography variant="h3" color="primary">{content['code']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>{content['header']}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{content['description']}</Typography>
              <Box mt={3}>
                <Button variant="contained" color="primary">{content['primary-action']}</Button>
              </Box>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box position="relative" height={512} bgcolor="grey.100">
            <img className={classes.img} src={content['image']} alt="" />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}