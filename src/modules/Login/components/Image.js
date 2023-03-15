import { Box } from '@mui/material';

import welcomeImg from '../../../assets/images/welcome-image.svg';

function LoginImage() {
  return (
    <Box sx={{ flex: '1', aspectRatio: '14 / 10' }}>
      <Box
        component="img"
        src={welcomeImg}
        sx={{
          objectFit: 'contain',
          objectPosition: 'center',
          width: '100%',
        }}
        alt="Discover the Globant experience!"
      />
    </Box>
  );
}

export default LoginImage;
