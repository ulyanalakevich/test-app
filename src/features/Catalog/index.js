import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { fetchUniversities, selectUniversities, toggleFavorite } from "./catalogSlice";
import styled from "@emotion/styled";

const StyledIconButton = styled(IconButton)({
  backgroundColor: "transparent", 
  "&:hover": {
    backgroundColor: "transparent", 
  },
  "&.Mui-active": {
    backgroundColor: "transparent", 
  },
});

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "static",
  top: "0px",
  left: "0",
right: "0",
margin: 0,
width: "100%",
height: "auto"
}))


export default function Catalog() {
  const dispatch = useDispatch();
  const universities = useSelector(selectUniversities);

  useEffect(() => {
    dispatch(fetchUniversities());
  }, [dispatch]);

  const handleToggleFavorite = (index) => {
    dispatch(toggleFavorite(index));
  };

  if (!universities || universities.length === 0) {
    return <>
    <CssBaseline/>
    <Typography align="center" variant="h5" sx={{pt: 8}} color="common.white">Loading...</Typography>
    </>
  }
  const favoriteUniversities = universities.filter(
    (university) => university.isFavorite
  );
  const nonFavoriteUniversities = universities.filter(
    (university) => !university.isFavorite
  );
  const sortedUniversities = [...favoriteUniversities, ...nonFavoriteUniversities];


  return (
    <Box
      sx={{
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CssBaseline />
      <StyledContainer >
        <Typography
          component="h1"
          variant="h5"
          align="center"
          color="common.white"
          gutterBottom
          sx={{ pt: 6, pb: 6}}
        >
          Catalog
        </Typography>
      </StyledContainer>

      <Grid item maxWidth="md" sx={{ pt: 8 }}>
        <Grid container spacing={4}   sx={{
    justifyContent: "center",
 
  }}>
          {sortedUniversities.map((university, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "278px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    align="center"
                    component="h2"
                  >
                    {university.name}
                  </Typography>
                  <Typography>Country: {university.country}</Typography>

                  <Link href={university.web_pages[0]} target="_blank">
                    {university.web_pages[0]}
                  </Link>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", bgcolor: "primary.main" }}>
                  <StyledIconButton onClick={() => handleToggleFavorite(index)}
                  sx={{  color: university.isFavorite ? "primary.contrastText" : "inherit" }}>
                    <StarIcon color={university.isFavorite ? "white" : "inherit"}/>
                   <Typography component="h5" sx={{
                    fontSize: "fontSize.small",
                    lineHeight: "lineHeight.small",
                    color: university.isFavorite ? "#fff" : "inherit",
                    paddingLeft: "6px"
                   }}>
                   Add to favorites
                   </Typography>
                  </StyledIconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
