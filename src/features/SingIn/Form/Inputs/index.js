import {
  Grid,
  IconButton,
  InputAdornment,
  Link,
  useMediaQuery,
} from "@mui/material";
import {
  StyledTextField,
  WhiteVisibilityIcon,
  WhiteVisibilityOffIcon,
} from "./styled";
import { useState } from "react";

const Inputs = (theme) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <Grid item xs={12} sx={{ width: isMobile ? "343px" : "410px" }}>
        <StyledTextField
          label="Email"
          variant="outlined"
          fullWidth
          autoFocus
          id="email"
          name="email"
          sx={{ marginBottom: "16px" }}
        />
      </Grid>
      <Grid item>
        <StyledTextField
          fullWidth
          name="password"
          label="Password"
          id="password"
          autoComplete="current-password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? (
                    <WhiteVisibilityIcon />
                  ) : (
                    <WhiteVisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ textAlign: "right", pt: 2 }}>
        <Link
          href="#"
          variant="body2"
          color="primary.lightGreyBlue"
          sx={{
            fontSize: "fontSize.small",
            lineHeight: "lineHeight.xsmall",
            textDecoration: "none",
          }}
        >
          Forgot password?
        </Link>
      </Grid>
    </>
  );
};

export default Inputs;
