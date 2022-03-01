import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { blue, purple, green, red } from '@material-ui/core/colors';

import ApartmentIcon from '@material-ui/icons/Apartment';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const useStyles = makeStyles((theme) => ({
  icon1: {
    color: blue[600],
  },
  icon2: {
    color: purple[600],
  },
  icon3: {
    color: red[600],
  },
  icon4: {
    color: green[600],
  },
}));

export default function Features(props) {
  const classes = useStyles();

  const content = {
    'badge': 'LOREM IPSUM',
    'header': 'Lorem ipsum dolor sit',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla augue sit amet nunc venenatis, sit amet ultrices dolor vestibulum. Vivamus odio ante, accumsan et leo eu, pharetra aliquet orci.',    
    'col1-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'col2-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'col3-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'col4-desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={6}>
          <Box textAlign="center" mb={8}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>{content['header']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
            </Container>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box mb={2}>
                  <ApartmentIcon fontSize="large" className={classes.icon1} />
                </Box>
                <Typography variant="subtitle1" component="p" color="textSecondary">{content['col1-desc']}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box mb={2}>
                  <DevicesOtherIcon fontSize="large" className={classes.icon2} />
                </Box>
                <Typography variant="subtitle1" component="p" color="textSecondary">{content['col2-desc']}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box mb={2}>
                  <FolderSharedIcon fontSize="large" className={classes.icon3} />
                </Box>
                <Typography variant="subtitle1" component="p" color="textSecondary">{content['col3-desc']}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box mb={2}>
                  <BusinessCenterIcon fontSize="large" className={classes.icon4} />
                </Box>
                <Typography variant="subtitle1" component="p" color="textSecondary">{content['col4-desc']}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}