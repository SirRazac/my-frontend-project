// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React from 'react';
import { Typography, List, ListItem, ListItemText, Card } from '@mui/material';

// ------------------------------------------------------------------------------
// Function
// ------------------------------------------------------------------------------
function PaymentOverview() {
  const payments = [
    { id: 1, amount: '$500', status: 'Paid' },
    { id: 2, amount: '$300', status: 'Pending' },
    { id: 3, amount: '$200', status: 'Paid' },
  ];

  return (
    <Card sx={{ border: '1px solid #ccc', borderRadius: 2, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Payment Overview
      </Typography>
      <List>
        {payments.map((payment) => (
          <ListItem key={payment.id}>
            <ListItemText
              primary={`Amount: ${payment.amount}`}
              secondary={`Status: ${payment.status}`}
            />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default PaymentOverview;
