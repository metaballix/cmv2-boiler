import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

import { green } from '@material-ui/core/colors';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles((theme) => ({
  section: {
    background: `linear-gradient(180deg, ${theme.palette.background.header} 65%, #fff 35%);`
  },
  offer: {
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(2),
    }
  },
  cardBg: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  iconWrapper: {
    backgroundColor: green[100],
    color: green[600],
  },
  radioRoot: {
    justifyContent: 'center'
  }
}));

export default function Pricing(props) {
  const classes = useStyles();

  const content = {
    'badge': 'LOREM IPSUM',
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    'description': 'Integer feugiat massa sapien, vitae tristique metus suscipit nec.',
    '04_option1': 'Monthly billing',
    '04_option2': 'Annual billing',
    'col1-header': 'Lorem ipsum dolor sit amet',
    'col1-desc': 'Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis.',
    'terms': 'By signing up, you agree to our Terms, Data Policy and Cookies Policy.',
    'primary-action': 'Subscribe now',
    'col2-header': 'Lorem ipsum dolor sit amet',
    'value1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'value2': 'Nullam mattis volutpat venenatis',
    'value3': 'Phasellus interdum, odio sodales egestas sagittis',
    'value4': 'Nunc et accumsan arcu',
    'value5': 'Ut sodales odio non accumsan lobortis',
    ...props.content
  };

  const [state, setState] = React.useState({
    radio: 'monthly',
  });

  const handleChange = (event) => {
    setState({ ...state, radio: event.target.value });
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box pt={10} pb={12}>
          <Box textAlign="center" mb={3} color="common.white">
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">{content['badge']}</Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="secondary">{content['header-p1']} </Typography>
                <Typography variant="h3" component="span">{content['header-p2']}</Typography>
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
              <FormControl component="fieldset">
                <RadioGroup row className={classes.radioRoot}>
                  <FormControlLabel
                    name="option"
                    value="monthly"
                    control={<Radio color="primary" />}
                    label={<span> {content['04_option1']} &nbsp;<Chip label="$9" color="primary" /></span>}
                    labelPlacement="end"
                    checked={(state.radio === 'monthly')} onChange={handleChange} 
                  />

                  <FormControlLabel
                    name="option"
                    value="annual"
                    control={<Radio color="primary" />}
                    label={<span> {content['04_option2']} &nbsp;<Chip label="$99" color="primary" /></span>}
                    labelPlacement="end"
                    checked={(state.radio === 'annual')} onChange={handleChange} 
                  /> 
                </RadioGroup>
              </FormControl>
            </Container>
          </Box>
          <Container maxWidth="lg">
            <Card variant="outlined">
              <CardContent>
                <Box className={classes.offer}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={5}>
                      <Box display="flex" mt={3}>
                        <Box mx="auto">
                          <Avatar variant="rounded" className={classes.iconWrapper}>
                            <PaymentIcon />
                          </Avatar>
                        </Box>
                      </Box>
                      <Box mt={2} px={4}>
                        <Typography variant="h5" component="h3" align="center" gutterBottom={true}>{content['col1-header']}</Typography>
                        <Typography variant="body2" component="p" color="textSecondary" align="center">{content['col1-desc']}</Typography>
                        <Box mt={3}>
                          <form noValidate>
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth size="small" name="email" label="E-mail address" />
                              </Grid>
                              <Grid item xs={12}>
                                <TextField variant="outlined" required fullWidth size="small" type="password" name="password" label="Password" />
                              </Grid>
                              <Grid item xs={12}>
                                <FormControlLabel
                                  control={<Checkbox  name="terms" />}
                                  label={<Typography variant="caption" component="p" color="textSecondary">{content['terms']}</Typography>}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Box textAlign="center" mb={4}>
                                  <Button type="submit" variant="contained" color="secondary" size="large">
                                    {content['primary-action']}
                                  </Button>
                                </Box>
                              </Grid>
                            </Grid>
                          </form>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} lg={7} className={classes.cardBg}>
                      <Box pt={10} px={6}>
                        <Typography variant="h5" component="h3">{content['col2-header']}</Typography>
                        <Box display="flex" alignItems="center" mt={3} mb={1}>
                          <Box mr={1} color="success.main">
                            <CheckCircleIcon />
                          </Box>
                          <Typography variant="subtitle1" component="p" color="textSecondary">{content['value1']}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                          <Box mr={1} color="success.main">
                            <CheckCircleIcon />
                          </Box>
                          <Typography variant="subtitle1" component="p" color="textSecondary">{content['value2']}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                          <Box mr={1} color="success.main">
                            <CheckCircleIcon />
                          </Box>
                          <Typography variant="subtitle1" component="p" color="textSecondary">{content['value3']}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                          <Box mr={1} color="success.main">
                            <CheckCircleIcon />
                          </Box>
                          <Typography variant="subtitle1" component="p" color="textSecondary">{content['value4']}</Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <Box mr={1} color="success.main">
                            <CheckCircleIcon />
                          </Box>
                          <Typography variant="subtitle1" component="p" color="textSecondary">{content['value5']}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Container>
    </section>
  );
}