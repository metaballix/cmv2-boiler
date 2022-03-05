import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(0),
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: 'logo192.png', width: 30 },
    'copy': '© 2022 Metaballix Foundation. All rights reserved.',
    'link1': 'Metaball NFTs',
    'link2': 'PlasmaVerse XR',
    'link3': 'Xone Microverses',
    'link4': 'Tokenomics',
    'link5': 'Roadmap',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img className="noselect" style={{ marginTop:"-5px" }} src={ content.brand.image } alt="Mint Metaballs Now!" width={ content.brand.width } />;
  } else {
    brand = content.brand.text || '';
  }

  return (
    <footer>
      <Container maxWidth="lg">
        <Box py={6} textAlign="center">
            <button className="btn btn-outline-info btn-mint" type="button">
            <Link href="/#mint" color="inherit" underline="none">
              <span style={{ padding: "0 5px 0 0" }}>READY TO MINT? </span>
              <span style={{ padding: "0 0 7px 5px" }}>{brand}</span>
              </Link></button>
          <Box component="nav" className={classes.footerNav} mb={2}>
            <Link href="/#mint" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="/#link2" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="/#link3" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="/#link4" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
          <Box mb={2}>
            <IconButton color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false}>{content['copy']}</Typography>
        </Box>
      </Container>
    </footer>
  );
}