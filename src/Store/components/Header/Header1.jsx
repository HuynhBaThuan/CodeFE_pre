import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import { useNavigate } from 'react-router-dom';

const Header = ({ title, link }) => {
    const history = useNavigate();
    const redirectToProductPage = () => {
        history('/store/store/product', { state: { yourData: 'Dữ liệu cần truyền' } });
    };
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="15px 0" display="flex" alignItems="center">
            <Box
                fontSize="20px"
                height="40px"
                width="40px"
                border="0.1px solid gray"
                borderRadius="2px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginRight="10px"
                color="gray"
                onClick={() => redirectToProductPage()}
                style={{ cursor: 'pointer' }}
            >
                <i style={{ color: "gray" }} className="fa-solid fa-left-long"></i>
            </Box>
            <Typography
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="24px"
                fontWeight="600"
            >
                {title}
            </Typography>
        </Box>
    );
};

export default Header;
