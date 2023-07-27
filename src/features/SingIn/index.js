import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import BackgroundImage from "../../backgroundImage.jpg";
import IconButton from "@mui/material/IconButton";

import { styled } from "@mui/system";
import { theme } from "../../theme";
import SwitchComponent from "./switch";
import { InputAdornment, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";
import SocialMediaList from "./SocialMediaList";
import SignUpButton from "./SignUpButton";

export default function SignIn() {
 
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", color: "primary.main" }}
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            color="common.white"
            sx={{ mb: 6, mt: 4 }}
          >
            Sign in
          </Typography>
          <Form />
          <SocialMediaList />
        </Box>
      </Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <SignUpButton/>
      </Grid>
    </Grid>
  );
}
