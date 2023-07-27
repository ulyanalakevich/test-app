import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: "static",
  top: "0px",
  left: "0",
  right: "0",
  margin: 0,
  width: "100%",
  height: "auto",
}));
