import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    marginBottom: theme.spacing(3),
  },
  halfLg: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values['lg'] / 2
    }
  },
  firstBox: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(0),
      paddingRight: theme.spacing(6)
    }
  },
  fullHeightImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: 'cover',
    height: '100%',
    width: '100%'
  }
}));

export default function Content(props) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Donec lacinia',
    'header-p2': 'turpis non sapien lobortis pretium',
    '02_paragraph1': 'Laudantium, unde aliquam sit accusantium a explicabo maiores doloribus aut, rerum accusamus alias saepe molestias ut suscipit voluptate voluptatibus repellendus fuga vero. Error delectus odit, numquam laborum.',
    '02_paragraph2': 'Alias sunt voluptas ratione modi dolore nostrum debitis nihil. Nemo, ratione repellat quia doloremque perferendis fuga cumque ex corporis laborum distinctio dolorum deserunt voluptates ea architecto ab, esse omnis quas provident.',
    '02_paragraph3': 'Necessitatibus porro suscipit consequatur, eum, odio rem sequi quisquam, libero fuga qui mollitia ullam temporibus. Repudiandae eum vitae iste odit esse, eligendi ipsum, aut ipsam provident unde quidem aperiam ad maiores et, illum corrupti incidunt quasi.',
    '02_image': 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    'primary-action': 'Learn more',
    ...props.content
  };

  return (
    <section>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box className={[classes.halfLg, classes.firstBox]}>
            <Container>
              <Box mb={4}>
                <Typography variant="h3" component="h2" paragraph={true}>
                  <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                  <Typography variant="h3" component="span">{content['header-p2']}</Typography>
                </Typography>
              </Box>

              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['02_paragraph1']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['02_paragraph2']}</Typography>
              <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{content['02_paragraph3']}</Typography>

              <div>
                <Button variant="text" color="secondary" endIcon={<ArrowRightAltIcon />} className={classes.primaryAction}>{content['primary-action']}</Button>
              </div>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box position="relative" height={768}>
            <img className={classes.fullHeightImage} src={content['02_image']} alt="" />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}