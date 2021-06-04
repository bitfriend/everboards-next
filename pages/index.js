import React from 'react';
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

import Link from '../src/Link';
import AssetList from '../src/AssetList';
import theme from '../src/helpers/theme';

const useStyles = makeStyles(theme => ({
  title: {
    color: '#fff',
    textShadow: `-1px -1px 0 ${colors.indigo[900]}, 1px -1px 0 ${colors.indigo[900]}, -1px 1px 0 ${colors.indigo[900]}, 1px 1px 0 ${colors.indigo[900]}`
  },
  social: {
    lineHeight: 1
  }
}));

function Index() {
  const linkIconSize = theme.spacing(4.5);
  const classes = useStyles();
  return (
    <Container maxWidth="sm" style={{
      backgroundColor: colors.indigo[100]
    }}>
      <Box py={4}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          className={classes.title}
        >
          ELLIE PRITTS
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Box
          width={theme.spacing(48)}
          height={theme.spacing(6.75)}
          px={4}
          mb={1.5}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          bgcolor="rgba(86, 86, 86, 0.65)"
          borderRadius={theme.spacing(1.25)}
        >
          <Link className={classes.social} href="https://www.instagram.com">
            <Image src="/instagram.png" alt="Instagram" width={linkIconSize} height={linkIconSize} />
          </Link>
          <Link className={classes.social} href="https://www.tiktok.com">
            <Image src="/tiktok.png" alt="TikTok" width={linkIconSize} height={linkIconSize} />
          </Link>
          <Link className={classes.social} href="https://www.twitter.com">
            <Image src="/twitter.png" alt="Twitter" width={linkIconSize} height={linkIconSize} />
          </Link>
          <Link className={classes.social} href="https://www.snapchat.com">
            <Image src="/snapchat.png" alt="Snapchat" width={linkIconSize} height={linkIconSize} />
          </Link>
          <Link className={classes.social} href="https://www.vimeo.com">
            <Image src="/vimeo.png" alt="Vimeo" width={linkIconSize} height={linkIconSize} />
          </Link>
          <Link className={classes.social} href="https://www.youtube.com">
            <Image src="/youtube.png" alt="Youtube" width={linkIconSize} height={linkIconSize} />
          </Link>
          <Link className={classes.social} href="https://www.twitch.com">
            <Image src="/twitch.png" alt="Twitch" width={linkIconSize} height={linkIconSize} />
          </Link>
          <Link className={classes.social} href="https://www.linkedin.com">
            <Image src="/linkedin.png" alt="LinkedIn" width={linkIconSize} height={linkIconSize} />
          </Link>
        </Box>
      </Box>
      <Box pb={4}>
        <AssetList />
      </Box>
    </Container>
  );
}

export default Index;
