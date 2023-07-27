import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: theme.palette.primary.main,
    paddingLeft: "8px",
  },
  "& legend": {
    display: "none",
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      marginTop: "4px",
      borderColor: theme.palette.primary.midnightBlue600,
      borderRadius: theme.shape.borderRadius.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-root": {
    color: theme.palette.common.white,
  },
  "& .MuiInputBase-input": {
    paddingBlockEnd: "7px",
    paddingBlockStart: "26px",
    paddingInlineStart: "20px",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(16px, 8px) scale(0.75)",
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const WhiteVisibilityIcon = styled(VisibilityIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const WhiteVisibilityOffIcon = styled(VisibilityOffIcon)(
  ({ theme }) => ({
    color: theme.palette.common.white,
  })
);
