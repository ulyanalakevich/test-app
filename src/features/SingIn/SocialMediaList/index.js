import { socials } from "./socials";

import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import { SocialList, iconStyle } from "./styled";
import { List, Typography } from "@mui/material";

const SocialMediaList = ({theme}) => {
  return (
    <>
      <Typography
        sx={{
          fontSize:"fontSize.small",
          lineHeight: "lineHeight.small",
          fontWeight: "typography.fontWeightRegular",
          color: "primary.main",
          paddingTop: "40px",
          textAlign: "center",
        }}
      >
        or login with
      </Typography>
      <List sx={SocialList}>
        {socials.map(({ name, url, IconComponent }) => (
          <ListItem key={name} sx={iconStyle}>
            <Link
              href={url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SocialMediaList;
