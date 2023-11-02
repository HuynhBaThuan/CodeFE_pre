import React from 'react'
import Header from "../../components/Header/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Sidebara from '../Sidebar/Sidebar';

function ViewAllStore() {
    return (
        <div>
            <Box m="20px">

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                </Box>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                >
                    <Box
                        gridColumn="span 12 "
                        gridRow="span 2"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        overflow="auto"
                    >
                        <Sidebara />

                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default ViewAllStore
