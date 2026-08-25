"use client";

import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import logo from "../../../assets/flock_logo_figure.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  background: string;
  color: string;
}

export default function Header(props: Props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToHome = () => {
    router.push("/");
  };

  const goToRururu = () => {
    router.push("/rururu");
  };

  const goToDokidoki = () => {
    router.push("/dokidoki");
  };

  const goToMarche = () => {
    router.push("/marche");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          background: props.background,
          color: props.color,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ ":hover": { cursor: "pointer" } }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "large" }}>
                {props.title}
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ color: props.color, display: { xs: "flex" } }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={goToHome}>ホームへ戻る</MenuItem>
                <MenuItem onClick={goToRururu}>
                  チーム・るるるのおはなしパーティ
                </MenuItem>
                <MenuItem onClick={goToMarche}>ケイコバ de マルシェ</MenuItem>
                <MenuItem onClick={goToDokidoki}>
                  スタジオ de 声優チャレンジ
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
