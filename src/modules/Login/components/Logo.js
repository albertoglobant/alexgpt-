import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import LogoImg from '../../../assets/images/globantArrow.png';

const Logo = () => (
  <RouterLink to={'/'}>
    <Box style={styles.wrapper}>
      <Typography style={styles.text}>alexGPT+</Typography>
      <Box component="img" sx={styles.logo} src={LogoImg} />
    </Box>
  </RouterLink>
);

const styles = {
  wrapper: {
    lex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 0,
  },
  logo: {
    height: '59px',
  },
  text: {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '14px',
    letterSpacing: '0.15px',
    marginRight: '8px',
    color: '#FFFFFF',
  },
};
export default Logo;
