import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  firstBox: {
    [theme.breakpoints.up('md')]: {
      paddingRight: theme.spacing(4)
    }
  },
  paragraph: {
    marginBottom: theme.spacing(3)
  },
  action: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  actionMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
}));

export default function Blog(props) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    'paragraph1': 'Laudantium, unde aliquam sit accusantium a explicabo maiores doloribus aut, rerum accusamus alias saepe molestias ut suscipit voluptate voluptatibus repellendus fuga vero. Error delectus odit.',
    'paragraph2': 'Alias sunt voluptas ratione modi dolore nostrum debitis nihil. Nemo, ratione repellat quia doloremque perferendis fuga cumque ex corporis laborum distinctio dolorum deserunt voluptates ea architecto ab, esse omnis quas provident. Maiores sed ipsam eos quis.',
    'paragraph3': 'Alias sunt voluptas ratione modi dolore nostrum debitis nihil. Nemo, ratione repellat quia doloremque perferendis fuga cumque ex corporis laborum distinctio dolorum deserunt voluptates ea architecto ab, esse omnis quas provident. Maiores sed ipsam eos quis.',
    'primary-action': 'Learn more',
    ...props.content
  };

  return (
    <section>
      <Box py={10}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={6} className={classes.firstBox}>
              <Box mb={3}>
                <Typography variant="h3" component="h2" paragraph={true}>
                  <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                  <Typography variant="h3" component="span">{content['header-p2']}</Typography>
                </Typography>
              </Box>

              <Typography variant="subtitle1" paragraph={true} color="textSecondary" className={classes.paragraph}>{content['paragraph1']}</Typography>
              <div className={classes.action}>
                <Button variant="text" color="secondary" endIcon={<ArrowRightAltIcon />} className={classes.primaryAction}>{content['primary-action']}</Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" paragraph={true} color="textSecondary" className={classes.paragraph}>{content['paragraph2']}</Typography>
              <Typography variant="subtitle1" paragraph={true} color="textSecondary" className={classes.paragraph}>{content['paragraph2']}</Typography>
              <div className={classes.actionMobile}>
                <Button variant="text" color="secondary" endIcon={<ArrowRightAltIcon />} className={classes.primaryAction}>{content['primary-action']}</Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}