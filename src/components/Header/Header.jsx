import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  alpha,
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { pages } from "../../constants/Iterables";
import { userData } from "../../utils/mockDataForUser";
import DrawerAppBar from "./DrawerAppBar";
import "./Header.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 4,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginLeft: 0,
  marginRight: 24,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function Header(props) {
  const imageUrl = "";
  const profileName = userData.user_name;
  // const [imageUrl, setImage] = useState<string>('');
  // const [profileName, setProfileName] = useState<string>('Hardcoded Data');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar position="static" className="header-container" color="background">
        <Box className="header">
          <Toolbar sx={{ width: "100%" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <img src={Logo} alt="Logo" height={50} width={50} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  sx={{ my: 2, display: "block" }}
                  color={"primary"}
                  onClick={() => {
                    navigate(page.route);
                  }}
                >
                  <Typography variant="button">{page.name}</Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>

          <Search>
            <SearchIconWrapper>
              <SearchOutlinedIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box className="header-profile">
            <IconButton sx={{ mr: 1 }}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            {imageUrl.length > 0 ? (
              <Avatar alt={profileName} src={imageUrl} />
            ) : (
              <Avatar className="profile-avtr" data-testid="avatar-id">
                {profileName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </Avatar>
            )}
          </Box>
        </Box>
      </AppBar>
      <nav>
        <DrawerAppBar
          handleDrawerToggle={handleDrawerToggle}
          pages={pages}
          mobileOpen={mobileOpen}
        />
      </nav>
    </>
  );
}

export default Header;
