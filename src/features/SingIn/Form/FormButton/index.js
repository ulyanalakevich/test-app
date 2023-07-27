import { Button, Typography } from "@mui/material";
import { ButtonText, StyledButton } from "./styled";

const FormButton = ({handleLogin}) => {

return (
  <Button
      type="button"
      fullWidth
      variant="contained"
      sx={StyledButton}
      onClick={handleLogin}
    >
      <Typography
        variant="body1"
        sx={ButtonText}
      >
        Sign In
      </Typography>
    </Button>
)
}

export default FormButton;