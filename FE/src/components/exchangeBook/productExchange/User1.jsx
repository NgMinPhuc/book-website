import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import AvatarGroup from '@mui/joy/AvatarGroup';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function User1() {
  return (
    <AvatarGroup>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar alt="Remy Sharp" src="./images/R.png" />
          <Typography sx={{ marginLeft: 1, maxWidth: 150, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Chuyện con mèo dạy hải âu bay
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar alt="Travis Howard" src="./images/R.png" />
          <Typography sx={{ marginLeft: 1, maxWidth: 150, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Travis Howard
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar alt="Cindy Baker" src="./images/R.png" />
          <Typography sx={{ marginLeft: 1, maxWidth: 150, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Cindy Baker
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar alt="Cindy Baker" src="./images/R.png" />
          <Typography sx={{ marginLeft: 1, maxWidth: 150, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Cindy Baker
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar alt="Cindy Baker" src="./images/R.png" />
          <Typography sx={{ marginLeft: 1, maxWidth: 150, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Cindy Baker
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <Avatar sx={{ }}>+3</Avatar>
          <Typography sx={{ marginLeft: 1, maxWidth: 150, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            ...
          </Typography>
        </Box>
      </Box>
    </AvatarGroup>
  );
}