// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React from 'react';
import { Typography, Card } from '@mui/material';

// ------------------------------------------------------------------------------
// Function
// ------------------------------------------------------------------------------
function NotesField() {
  return (
    <Card sx={{ border: '1px solid #ccc', borderRadius: 2, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Notes
      </Typography>
    </Card>
  );
}

export default NotesField;
