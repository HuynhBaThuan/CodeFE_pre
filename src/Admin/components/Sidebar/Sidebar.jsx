import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CategoryIcon from '@mui/icons-material/Category';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CommentIcon from '@mui/icons-material/Comment';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Item = ({ title, to, icon, selected, setSelected }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    const handleNavigation = ({ to, title }) => {
        navigate(to);
        setSelected(title);
    };
    return (
        <MenuItem
            onClick={() => { handleNavigation({ to, title }); setSelected(title); }}
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}

            icon={icon}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const Sidebara = ({ Catname, Admin }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Danh sách Sản phẩm");
    const { t } = useTranslation();
    console.log("Admin")
    console.log(Admin)

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },

            }}
        >
            <ProSidebar collapsed={isCollapsed} backgroundColor="none" height='auto'>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMINIS
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    src={Admin.photo}
                                    style={{
                                        cursor: "pointer", borderRadius: "50%", width: "100px", height: "100px"
                                    }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    {Admin.firstName} {Admin.lastName}
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    {Admin.email}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        {/* <Item
                            title="Dashboard"
to="./"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        /> */}

                        {!isCollapsed && (<Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Của hàng
                        </Typography>)}
                        <Item
                            title="Danh sách cửa hàng"
                            to="/"
                            icon={<MenuOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}

                        />
                        <Item
                            title="Cấp phép cửa hàng"
                            to="/Acceptstore"
                            icon={<LeaderboardIcon />}
                            selected={selected}
                            setSelected={setSelected}

                        />

                        {!isCollapsed && (<Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Của hàng
                        </Typography>)}
                        <Item
                            title="Danh sách Shipper"
                            to="/ViewAllShipper"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Cấp phép Shipper"
                            to="/ManageShipper"
                            icon={<CommentIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Logout"
                            to="/calendar"
                            icon={<LogoutIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebara;