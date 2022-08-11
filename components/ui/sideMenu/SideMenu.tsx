import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { adminMenu, icons, clientMenu } from "./constants";
import { useContext, useState } from "react";
import { UiContext } from "../../../context";
import { useRouter } from "next/router";

export const SideMenu = () => {
  const router = useRouter();
  const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    navigateTo(`/search/${searchTerm}`);
  };

  const navigateTo = (url: string = "") => {
    toggleSideMenu();
    router.push(url);
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      sx={{ backdropFilter: "blur(4px)", transition: "all 0.5s ease-out" }}
      onClose={toggleSideMenu}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
              type="text"
              placeholder="Buscar..."
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={onSearchTerm}>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>

          {clientMenu.map(({ label, icon, link, properties }) => {
            const Icon = icons[icon];
            return (
              <ListItem
                onClick={() => navigateTo(link)}
                button
                key={label}
                {...properties}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            );
          })}

          {/* Admin */}
          <Divider />
          <ListSubheader>Admin Panel</ListSubheader>
          {adminMenu.map(({ label, icon }) => {
            const Icon = icons[icon];
            return (
              <ListItem button key={label}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
