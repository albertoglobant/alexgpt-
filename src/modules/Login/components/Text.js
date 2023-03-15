import { Box, Typography } from '@mui/material';

import Logo from './Logo';

const WelcomeText = () => {
  return (
    <>
      <Box component="section" sx={styles.logoWrapper}>
        <Logo />
      </Box>
      <Box marginBottom="20px">
        <Typography component="h2" sx={styles.welcomeTitle}>
          Discover
          <Box component="span" sx={styles.welcomeSubtitle}>
            the Globant experience!
          </Box>
        </Typography>
      </Box>
      <Typography component="p" sx={styles.welcomeDescription}>
        The smart solution for all your question: alexGPT+
      </Typography>
    </>
  );
};

const styles = {
  logoWrapper: {
    marginBottom: {
      xs: '50px',
      xl: '90px',
    },
  },
  welcomeTitle: {
    fontFamily: 'RobotoBold',
    fontSize: {
      xs: '60px',
      xl: '96px',
    },
    lineHeight: '1.2',
  },
  welcomeSubtitle: {
    display: 'block',
    fontFamily: 'RobotoLight',
    fontSize: {
      xs: '40px',
      xl: '60px',
    },
    lineHeight: '1.6',
  },
  welcomeDescription: {
    fontFamily: 'RobotoLight',
    fontSize: '20px',
    lineHeight: '32px',
    marginBottom: {
      xs: '50px',
      xl: '80px',
    },
    letterSpacing: '0.15px',
  },
};

export default WelcomeText;
