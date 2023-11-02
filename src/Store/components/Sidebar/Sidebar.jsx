import { useEffect, useState } from "react";
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
import axios from "axios";

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
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => handleNavigation({ to, title })}
            icon={icon}
        >
            <Typography>{title}</Typography>
        </MenuItem>
    );
};

const Sidebara = ({ Catname }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const [Data, setData] = useState([]);
    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const fetchData2 = async () => {
        try {
            const res = await axios.get(`https://falth.vercel.app/api/store/${_id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            });
            setData(res.data.data)
            console.log(res.data.data)

        } catch (error) {
            console.log('Lỗi đăng nhập:', error);
        }
    };
    useEffect(() => {
        fetchData2();
    }, []);

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
                                    src={'./avata.jpg'}
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
                                    {Data.name}
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    {Data._id}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"

                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Của hàng
                        </Typography>
                        <Item
                            title="Danh sách Sản phẩm"
                            to="/product"
                            icon={<MenuOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}

                        />
                        <SubMenu label="Category" icon={<CategoryIcon />} >
                            {Catname.map((option, index) => {
                                return (
                                    <Item
                                        title={option.catName}
                                        to="/product"
                                        selected={selected}
                                        setSelected={setSelected}

                                    />
                                );
                            })}
                        </SubMenu>
                        <Item
                            title="Thống kê"
                            to="/product"
                            icon={<LeaderboardIcon />}
                            selected={selected}
                            setSelected={setSelected}

                        />

                        <Typography
                            variant="h6"
                            color={colors.grey[300]}
                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Khách hàng
                        </Typography>
                        <Item
                            title="Danh sách Đơn hàng"
                            to="/listorder"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Feecback"
                            to="/team"
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