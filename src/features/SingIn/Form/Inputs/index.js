import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  StyledTextField,
  WhiteVisibilityIcon,
  WhiteVisibilityOffIcon,
} from "./styled";
import { useState } from "react";
import FormButton from "../FormButton";
import { useHistory } from "react-router-dom";
import { login, loginSuccess } from "../../authSlice";
import { useDispatch } from "react-redux";
import { loginAPI } from "../../authApi";

const Inputs = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setError(null);

    try {
      const token = await loginAPI(username, password);
      dispatch(loginSuccess({ token }));
      history.push("/catalog");
    } catch (error) {
      setError("Invalid username or password.");
    }
    setUsername("");
    setPassword("");
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
          sx={{ mb: "16px" }}
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
      {error && (
        <Grid item xs={12}>
          <Typography sx={{ color: "error.main", mt: 2 }}>{error}</Typography>
        </Grid>
      )}
      <FormButton handleLogin={handleLogin} />
    </>
  );
};

export default Inputs;
