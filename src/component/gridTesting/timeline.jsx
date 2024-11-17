// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React from 'react';
import { Typography, List, ListItem, ListItemText, Card } from '@mui/material';

// ------------------------------------------------------------------------------
// Function
// ------------------------------------------------------------------------------
function Timeline() {
  const events = [
    { date: '2024-11-01', description: 'Project Start' },
    { date: '2024-11-10', description: 'Phase 1 Review' },
    { date: '2024-12-01', description: 'Final Submission' },
  ];

  return (
    <Card sx={{ border: '1px solid #ccc', borderRadius: 2, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Timeline
      </Typography>
      <List>
        {events.map((event, index) => (
          <ListItem key={index}>
            <ListItemText primary={event.date} secondary={event.description} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Timeline;
