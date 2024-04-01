import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Footer() {
  return (
    <Card sx={{ backgroundColor: "teal" }}>
      <CardContent>
        <Grid
          sx={{
            mx: "auto",
            p: 1,
            m: 4,
          }}
        >
          <Typography variant="h4" color="white">
            About Us
          </Typography>
          <Typography color="white" sx={{ textAlign: "Justify" }}>
            Welcome to the future of storytelling! Our science fiction stories
            take you on exhilarating journeys to distant galaxies, parallel
            dimensions, and beyond. Immerse yourself in a world where the limits
            of imagination are shattered, and possibilities are endless.Explore
            the unknown, encounter futuristic technologies, and meet characters
            who defy the boundaries of space and time. Join us as we push the
            boundaries of storytelling and transport you to realms uncharted.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <Typography variant="body2" color="white">
              {"Copyright © "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Footer;
