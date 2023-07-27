import { Typography } from "@mui/material";
import { StyledContainer } from "./styled";

const Header = () => {
  return (
    <StyledContainer>
      <Typography
        component="h1"
        variant="h5"
        align="center"
        color="common.white"
        sx={{ pt: 6, pb: 6 }}
      >
        Catalog
      </Typography>
    </StyledContainer>
  );
};

export default Header;
