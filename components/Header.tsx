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
          <Typography sx={{ fontWeight: "bold", fontSize: "large" }}>
            {props.title}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
