// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React from 'react';
import { Box, Typography, Avatar, Card } from '@mui/material';

// ------------------------------------------------------------------------------
// Function
// ------------------------------------------------------------------------------
function CustomerProfileCard() {
  return (
    <Card
      sx={{
        border: '1px solid #ccc',
        borderRadius: 2,
        padding: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ marginRight: 2 }}>C</Avatar>
      <Box>
        <Typography variant="h6">John Doe</Typography>
        <Typography variant="body2">john.doe@example.com</Typography>
        <Typography variant="body2">+1 234 567 890</Typography>
      </Box>
    </Card>
  );
}

export default CustomerProfileCard;
