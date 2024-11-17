// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React from "react";
import { Grid, Box } from "@mui/material";

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import Timeline from "../../component/gridTesting/timeline";
import Calendar from "../../component/gridTesting/calendar";
import NotesField from "../../component/gridTesting/notesField";
import PaymentOverview from "../../component/gridTesting/paymentOverview";
import CustomerProfileCard from "../../component/gridTesting/customerProfileCard";

// ------------------------------------------------------------------------------
// Function
// ------------------------------------------------------------------------------
function GridTesting() {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Timeline />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Calendar />
                </Grid>
                <Grid item xs={12}>
                    <NotesField />
                </Grid>
                <Grid item xs={12} md={6}>
                    <PaymentOverview />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CustomerProfileCard />
                </Grid>
            </Grid>
        </Box>
    );
}

export default GridTesting;
