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
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
import SpaceOpera from "./image/Space Opera.jpg";
import Cyberpunk from "./image/Cyberpunk.jpg";
import HardScienceFiction from "./image/Hard Science Fiction.jpg";
import DystopianFiction from "./image/Dystopian Fiction.jpg";
import TimeTravel from "./image/Time Travel.jpg";
import AlternateHistory from "./image/Alternate History.png";
import MilitaryScienceFiction from "./image/Military Science Fiction.jpg";
import PostApocalyptic from "./image/Post-Apocalyptic.jpg";
import Biopunk from "./image/Biopunk.jpeg";
import { Link, useNavigate } from "react-router-dom";
import AppBarr from "./AppBar";
import Footer from "./Footer";



function Home() {


  return (
    <Grid>
      <AppBarr/>
      <Grid>
        <Card sx={{ minWidth: 275, mx: "auto", p: 5, m: 1 }}>
          <CardContent justifyContent="center">
            <Typography
              variant="h3"
              component="div"
              sx={{ textAlign: "center" }}
            >
              " IF TIME TRAVEL IS POSSIBLE, WHERE ARE THE TOURISTS FORM THE
              FUTURE ? "
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "center" }}
            >
              - Stephen Hawking -
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Card
          sx={{
            minWidth: 275,
            mx: "auto",
            backgroundColor: "#4aedc4",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img width="320" height="300" src={SpaceOpera} alt="logo" />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Space Opera
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Epic tales set in space, often involving grand space battles,
              interstellar politics, and larger-than-life characters. Examples
              include "Star Wars" and "Dune."
            </Typography>
            <Box ml={7}>
              <Link to="/posts">
                <Button
                  sx={{
                    mx: "auto",
                    p: 1,
                    m: 4,
                  }}
                  variant="contained"
                >
                  View Stories
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#4aedc4",
            mx: "auto",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img width="320" height="300" src={Cyberpunk} alt="logo" />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Cyberpunk
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Set in a dystopian future where advanced technology coexists with
              a decayed societal structure. Cyberpunk explores the impact of
              technology on humanity, often featuring hackers,
              mega-corporations, and a gritty, urban environment. Examples
              include "Blade Runner" and "Neuromancer."
            </Typography>
          </CardContent>
          <Box ml={7}>
            <Link to="/posts">
              <Button
                sx={{
                  mx: "auto",
                  p: 1,
                  m: 4,
                }}
                variant="contained"
              >
                View Stories
              </Button>
            </Link>
          </Box>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#4aedc4",
            mx: "auto",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img width="320" height="300" src={HardScienceFiction} alt="logo" />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Hard Science Fiction
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Emphasizes scientific accuracy and realism. These stories delve
              into the plausible and speculative aspects of scientific
              advancements, often exploring the potential consequences of
              cutting-edge technologies. Examples include "The Martian" and
              "2001: A Space Odyssey."
            </Typography>
            <Box ml={7}>
              <Link to="/posts">
                <Button
                  sx={{
                    mx: "auto",
                    p: 1,
                    m: 4,
                  }}
                  variant="contained"
                >
                  View Stories
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#4aedc4",
            mx: "auto",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img width="320" height="300" src={DystopianFiction} alt="logo" />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Dystopian Fiction
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Explores societies characterized by oppressive governments,
              societal collapse, or other forms of extreme control. Examples
              include "1984" and "The Hunger Games."
            </Typography>
            <Box ml={7}>
              <Link to="/posts">
                <Button
                  sx={{
                    mx: "auto",
                    p: 1,
                    m: 4,
                  }}
                  variant="contained"
                >
                  View Stories
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#4aedc4",
            mx: "auto",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img width="320" height="300" src={TimeTravel} alt="logo" />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Time Travel
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Involves journeys through time, exploring the consequences and
              paradoxes that arise. Examples include "Back to the Future" and
              "Looper."
            </Typography>
            <Box ml={7}>
              <Link to="/posts">
                <Button
                  sx={{
                    mx: "auto",
                    p: 1,
                    m: 4,
                  }}
                  variant="contained"
                >
                  View Stories
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#4aedc4",
            mx: "auto",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img width="320" height="300" src={AlternateHistory} alt="logo" />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Alternate History
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Imagines worlds where historical events unfolded differently,
              leading to altered timelines. Examples include "The Man in the
              High Castle" and "Fatherland."
            </Typography>
            <Box ml={7}>
              <Link to="/posts">
                <Button
                  sx={{
                    mx: "auto",
                    p: 1,
                    m: 4,
                  }}
                  variant="contained"
                >
                  View Stories
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      <Grid sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#4aedc4",
            mx: "auto",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img
              width="320"
              height="300"
              src={MilitaryScienceFiction}
              alt="logo"
            />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Military Science Fiction
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Focuses on military conflicts in futuristic settings, often
              featuring advanced technology and interstellar warfare. Examples
              include "Starship Troopers" and "Old Man's War."
            </Typography>
            <Box ml={7}>
              <Link to="/posts">
                <Button
                  sx={{
                    mx: "auto",
                    p: 1,
                    m: 4,
                  }}
                  variant="contained"
                >
                  View Stories
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#4aedc4",
            mx: "auto",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img width="320" height="300" src={PostApocalyptic} alt="logo" />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Post-Apocalyptic
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Set in a world after a catastrophic event, exploring the struggles
              of survivors in a changed environment. Examples include "Mad Max:
              Fury Road" and "The Road."
            </Typography>
            <Box ml={7}>
              <Link to="/posts">
                <Button
                  sx={{
                    mx: "auto",
                    p: 1,
                    m: 4,
                  }}
                  variant="contained"
                >
                  View Stories
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            minWidth: 275,
            backgroundColor: "#4aedc4",
            mx: "auto",
            p: 5,
            m: 1,
          }}
        >
          <CardContent justifyContent="center">
            <img width="320" height="300" src={Biopunk} alt="logo" />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Biopunk
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ textAlign: "Justify" }}
            >
              Explores the intersection of biology and technology, often
              featuring genetic engineering, biohacking, and the consequences of
              manipulating life. Examples include "Gattaca" and "Oryx and
              Crake."
            </Typography>
            <Box ml={7}>
              <Link to="/posts">
                <Button
                  sx={{
                    mx: "auto",
                    p: 1,
                    m: 4,
                  }}
                  variant="contained"
                >
                  View Stories
                </Button>
              </Link>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Footer/>
    </Grid>
  );
}
export default Home;
