import StarIcon from "@mui/icons-material/Star";

import { CardActions, Typography } from "@mui/material";
import { StyledIconButton } from "./styled";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../catalogSlice";

const Favorite = ({ nation, index }) => {
  const dispatch = useDispatch();
  const handleToggleFavorite = (index) => {
    dispatch(toggleFavorite(index));
  };

  return (
    <CardActions sx={{ justifyContent: "center", bgcolor: "primary.main" }}>
      <StyledIconButton
        onClick={() => handleToggleFavorite(index)}
        sx={{
          color: nation.isFavorite ? "primary.contrastText" : "inherit",
        }}
      >
        <StarIcon color={nation.isFavorite ? "white" : "inherit"} />
        <Typography
          component="h5"
          sx={{
            fontSize: "fontSize.small",
            lineHeight: "lineHeight.small",
            color: nation.isFavorite ? "#fff" : "inherit",
            paddingLeft: "6px",
          }}
        >
          Add to favorites
        </Typography>
      </StyledIconButton>
    </CardActions>
  );
};

export default Favorite;
