import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography
} from '@material-ui/core';

import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-alpha example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}