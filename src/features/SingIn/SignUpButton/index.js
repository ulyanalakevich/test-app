import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { ButtonText, StyledButon, Text } from "./styled";

const SignUpButton = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!isMobile && (
        <Grid
          container
          justifyContent="flex-end"
          alignItems="flex-start"
          sx={{ height: "100%", paddingTop: "48px", paddingRight: "48px" }}
          gap={4}
        >
          <Grid item>
            <Typography color="common.white" sx={Text}>
              Don't have an account?
            </Typography>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              fullWidth
              sx={StyledButon}
              label="Sign Up"
              variant="outlined"
            >
              <Typography variant="body1" sx={ButtonText}>
                Sign Up
              </Typography>
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SignUpButton;
