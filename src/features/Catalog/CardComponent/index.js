import { Card, CardContent, Link, Typography } from "@mui/material";
import Favorite from "../Favorite";

const CardComponent = ({ university, index }) => {
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
          {university.name}
        </Typography>
        <Typography>Country: {university.country}</Typography>

        <Link href={university.web_pages[0]} target="_blank">
          {university.web_pages[0]}
        </Link>
      </CardContent>
      <Favorite university={university} index={index} />
    </Card>
  );
};

export default CardComponent;
