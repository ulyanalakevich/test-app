import { Box, Grid } from "@mui/material";
import Inputs from "./Inputs";
import FormButton from "./FormButton";
import RememberMe from "./RememberMe";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Box
      component="form"
      color="common.white"
      noValidate
      onSubmit={handleSubmit}
    >
      <Grid>
        <Inputs />
      </Grid>
      <FormButton />
      <RememberMe />
    </Box>
  );
};

export default Form;
