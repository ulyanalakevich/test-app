import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUniversities, selectUniversities } from "./catalogSlice";
import Header from "./Header";
import CardComponent from "./CardComponent";

export default function Catalog() {
  const dispatch = useDispatch();
  const universities = useSelector(selectUniversities);

  useEffect(() => {
    dispatch(fetchUniversities());
  }, [dispatch]);

  if (!universities || universities.length === 0) {
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
  const favoriteUniversities = universities.filter(
    (university) => university.isFavorite
  );
  const nonFavoriteUniversities = universities.filter(
    (university) => !university.isFavorite
  );
  const sortedUniversities = [
    ...favoriteUniversities,
    ...nonFavoriteUniversities,
  ];

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
      <Grid item maxWidth="md" sx={{ pt: 8 }}>
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: "center",
          }}
        >
          {sortedUniversities.map((university, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardComponent university={university} index={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
