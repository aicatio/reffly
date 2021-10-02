import * as React from 'react';
import InsertLink from '@mui/icons-material/InsertLink';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.dark,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    width: '15px',
    height: '15px',
    borderRadius: '7.5px',
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}));

export default function RefflyLogo() {
  const handleClick = () => {
    console.info('You clicked the Avatar.');
  };

  return (
    <Grid item xs={12}>
      <Grid container mt={5} justifyContent="center">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar
            onClick={handleClick}
            style={{ transform: 'rotate(-50deg)' }}
            sx={{
              width: 80,
              height: 80,
              bgcolor: 'tertiary.main',
            }}
          >
            <InsertLink
              sx={{ fontSize: 70, color: 'secondary.dark' }}
              color="primary"
            />
          </Avatar>
        </StyledBadge>
        <Typography fontFamily="Beth Ellen" sx={{ fontSize: 40, fontWeight: 'bold', mt: 1, color: 'secondary.dark' }}>
          reffly
        </Typography>
      </Grid>
      <Grid container sx={{ mb: 6, mt: 1 }} justifyContent="center">
        <Typography>Free, Open source, Community driven!</Typography>
      </Grid>
    </Grid>
  );
}
