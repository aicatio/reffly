import * as React from 'react';
import AddLink from '@mui/icons-material/AddLink';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.refflyplus.secondary,
    color: theme.palette.refflyplus.secondary,
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
  return (
    <Grid item xs={12} className="Logo">
      <Grid container mt={5} justifyContent="center">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
          className="badgeCircle"
        >
          <Avatar
            className="badgeAvatar"
            style={{ transform: 'rotate(-50deg)' }}
            sx={{
              width: 80,
              height: 80,
              bgcolor: 'refflyplus.primary',
            }}
          >
            <AddLink
              sx={{ fontSize: 70, color: 'refflyplus.secondary' }}
              color="primary"
              className="badgeAvatarLink"
            />
          </Avatar>
        </StyledBadge>
        <Typography
          className="badgeText"
          component="div"
          fontFamily="Beth Ellen"
          sx={{
            fontSize: 40,
            fontWeight: 'bold',
            mt: 1,
            color: 'refflyplus.secondary',
          }}
        >
          reffly<sup>+</sup>
        </Typography>
      </Grid>
    </Grid>
  );
}
