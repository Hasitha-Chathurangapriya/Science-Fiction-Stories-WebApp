import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import  {Grid}  from "@mui/material";
import { useNavigate } from "react-router-dom";

function AppBarr() {

    const pages = ["Book API"];
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
      navigate("/BookAPI");
    };

    const cantact = () => {
      navigate("/cantact");
    };

    const about = () => {
      navigate("/about");
    };
  
    const navigate = useNavigate();

return (
  <Grid>
    <AppBar
      position="static"
      sx={{
        backgroundColor: "teal",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <MenuBookIcon
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
      /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Maverick
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <MenuBookIcon
        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
      /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#Home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Maverick
          </Typography>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <div>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "flex" }}
                >
                  {page}
                </Button>
              </div>
            ))}{" "}
            <Button sx={{ my: 2, color: "white", display: "flex" }} onClick={about}>
              About
            </Button>
            <Button sx={{ my: 2, color: "white", display: "flex" }} onClick={cantact} >
              Contact
            </Button>
          </Box>
          {/* <Box ml={100}>
        <Link to="/login">
          <Button
            sx={{
              mx: "auto",
              p: 1,
              m: 1,
            }}
            variant="contained"
          >
            Login
          </Button>
        </Link>
      </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  </Grid>
);}

export default AppBarr;
