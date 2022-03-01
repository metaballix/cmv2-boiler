// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

// import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  number: {
    backgroundColor: theme.palette.background.emphasis,
    color: theme.palette.text.secondary
  },
  img: {
    maxWidth: 256,
    marginBottom: theme.spacing(2)
  },
  stepActive: {
    border: '1px solid',
    borderColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section>
  <Container maxWidth="lg">
    <Box py={10} textAlign="center">
      <Box mb={8}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom={true}>
            <Typography variant="h3" component="span">Welcome to the </Typography>
            <Typography variant="h3" component="span" color="secondary">PlasmaVerse</Typography>
            <Typography variant="h3" component="span">.</Typography>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph={true}>Integer feugiat massa sapien, vitae tristique metus suscipit nec.</Typography>
        </Container>
      </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Box p={3} pb={4}>
            <Box display="flex" justifyContent="center" mt={1} mb={4}>
              <Avatar className={classes.number}>1</Avatar>
            </Box>
            <img src="nereus-assets/img/illustrations/speak.svg" alt="" className={classes.img} />
            <Typography variant="h6" component="h3" gutterBottom={true}>Donec fermentum</Typography>
            <Typography variant="body2" component="p" color="textSecondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.stepActive} p={3} pb={4}>
            <Box display="flex" justifyContent="center" mt={1} mb={4}>
              <Avatar className={classes.number}>2</Avatar>
            </Box>
            <img src="nereus-assets/img/illustrations/loading.svg" alt="" className={classes.img} />
            <Typography variant="h6" component="h3" gutterBottom={true}>Dolor sit amet consectutar</Typography>
            <Typography variant="body2" component="p" color="textSecondary">Donec id lorem eget purus maximus suscipit nec vitae quam.</Typography>
            <Box mt={3}>
              <Button variant="contained" color="primary">Learn more</Button> 
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box p={3} pb={4}>
            <Box display="flex" justifyContent="center" mt={1} mb={4}>
              <Avatar className={classes.number}>3</Avatar>
            </Box>
            <img src="nereus-assets/img/illustrations/financial-report.svg" alt="" className={classes.img} />
            <Typography variant="h6" component="h3" gutterBottom={true}>Aliquam pellentesque</Typography>
            <Typography variant="body2" component="p" color="textSecondary">Vivamus fringilla finibus tincidunt. Integer mollis pellentesque libero.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
</section>
  );
}