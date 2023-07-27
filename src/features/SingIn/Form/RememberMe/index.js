import { Grid, Typography, useTheme } from "@mui/material";
import SwitchComponent from "./SwitchComponent";

const RememberMe = ({theme}) => {
return (
  <Grid
  container
  alignItems="center"
  justifyContent="space-between"
  sx={{
    borderBottom: "1px solid",
    paddingBottom: "40px",
    paddingTop: "16px",
    borderColor: "primary.midnightBlue600",
  }}
>
  <Grid item sx={{ textAlign: "Left" }}>
    <Typography
      sx={{
        fontSize: "fontSize.small",
        lineHeight:"lineHeight.small",
      }}
    >
      Remember me?
    </Typography>
  </Grid>
  <Grid item>
    <SwitchComponent />
  </Grid>
</Grid>
)
}

export default RememberMe;