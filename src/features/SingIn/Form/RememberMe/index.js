import { Grid, Typography} from "@mui/material";
import SwitchComponent from "./SwitchComponent";

const RememberMe = () => {
return (
  <Grid
  container
  alignItems="center"
  justifyContent="space-between"
  sx={{
    color: "common.white",
    borderBottom: "1px solid",
    paddingBottom: "40px",
    paddingTop: "16px",
    borderColor: "primary.midnightBlue600",
  }}
>
  <Grid item >
    <Typography
      sx={{
        fontSize: "fontSize.small",
        lineHeight:"lineHeight.small",
        textAlign: "left",
      }}
    >
      Remember me?
    </Typography>
  </Grid>
  <Grid item>
    <SwitchComponent />
  </Grid>
</Grid>
)};

export default RememberMe;