import { Box, Grid } from "@mui/material";
import Inputs from "./Inputs";
import RememberMe from "./RememberMe";

const Form = () => {
  return (
    <Box sx={{ mt: 6 }}>
      <Grid>
        <Inputs />
      </Grid>
      <RememberMe />
    </Box>
  );
};

export default Form;