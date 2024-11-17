// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React from 'react';
import { Typography, TextField, Card } from '@mui/material';

// ------------------------------------------------------------------------------
// Function
// ------------------------------------------------------------------------------
function NotesField() {
  return (
    <Card sx={{ border: '1px solid #ccc', borderRadius: 2, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Notes
      </Typography>
      <TextField
        label="Add your notes here"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
      />
    </Card>
  );
}

export default NotesField;
