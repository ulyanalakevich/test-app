import { Card, CardContent, Link, Typography } from "@mui/material";
import Favorite from "../Favorite";

const CardComponent = ({ nation, index }) => {
  return (
    <Card
      sx={{
        width: "278px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
      <Typography gutterBottom variant="h6" align="center" component="h2">
          {nation.Nation}
        </Typography>
        <Typography>Year: {nation.Year}</Typography>
        <Typography>Population: {nation.Population}</Typography>
      </CardContent>
      <Favorite nation={nation} index={index} />
    </Card>
  );
};

export default CardComponent;
