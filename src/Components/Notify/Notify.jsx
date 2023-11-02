import React from 'react'
import { Box, Icon, Typography, useTheme } from "@mui/material";
import { Formik, Form } from "formik";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import Header from '../../Store/components/Header/Header';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

function Notify({ error, message, setOpenNotify }) {
    return (
        <div>
            <div>
                <Box>
                    <div style={{ display: "flex" }}>                        <Button color="secondary" variant="contained" onClick={() => setOpenNotify(false)}>
                        Thoát
                    </Button>
                        <Header title={error ? "Thông báo từ FALTH : Thông báo khác" : "Thông báo từ FALTH :Thông báo lỗi"} subtitle={error ? `Thông báo:${message}` : `Lỗi: ${message}`} />

                    </div>
                </Box>

            </div >
        </div >
    )
}

export default Notify
