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
import FormButton from "../FormButton";
import { useHistory } from 'react-router-dom';

const Inputs = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch("https://playground.tesonet.lt/v1/tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "tesonet",
          password: "partyanimal",
        }),
      });

      if (!response.ok) {
        setError("Login failed. Please check your credentials.");
        return;
      }

      const data = await response.json();
      const token = data.token;
      console.log("Login successful! Token:", token);
      history.push('/catalog');
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("An error occurred during login.");
    }
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <FormButton handleLogin={handleLogin}/>
      {error && (
        <Grid item xs={12} sx={{ color: "error.main", mt: 2 }}>
          {error}
        </Grid>
      )}
    </>
  );
};

export default Inputs;
