import { Button, Typography } from "@mui/material";
import { ButtonText, StyledButton } from "./styled";

const FormButton = ({theme}) => {

return (
  <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={StyledButton}
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