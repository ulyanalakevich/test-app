import { Box, CssBaseline, Grid, List, Typography } from "@mui/material";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchNations, selectNations } from "./catalogSlice";
import Header from "./Header";
import CardComponent from "./CardComponent";
import { CatalogGrid, StyledGrid } from "./styled";

export default function Catalog() {
  const dispatch = useDispatch();
  const nations = useSelector(selectNations);

  useEffect(() => {
    dispatch(fetchNations());
  }, [dispatch]);

  if (!nations || nations.length === 0) {
    return (
      <>
        <CssBaseline />
        <Typography
          align="center"
          variant="h5"
          sx={{ pt: 8 }}
          color="common.white"
        >
          Loading...
        </Typography>
      </>
    );
  }
  const favoriteNations = nations.filter((nation) => nation.isFavorite);
  const nonFavoriteNations = nations.filter((nation) => !nation.isFavorite);
  const sortedNations = [...favoriteNations, ...nonFavoriteNations];

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
      <Header />
      <StyledGrid spacing={2}>
        {sortedNations.map((nation, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CardComponent nation={nation} index={index} />
          </Grid>
        ))}
      </StyledGrid>
    </Box>
  );
}
