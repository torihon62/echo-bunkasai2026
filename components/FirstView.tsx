import { Box, Button, Grid } from "@mui/material";

interface Props {
  title: string;
  fileName?: string;
  onClick?: () => void;
  background?: string;
  color?: string;
}

export default function FirstView(props: Props) {
  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ fontSize: "xxx-large" }}>{props.title}</Typography>
        </Box> */}
        <Box
          sx={{
            background: {
              xs: props.fileName
                ? `#fff url(/${props.fileName.replace(
                    ".png",
                    "_mobile.png"
                  )}) no-repeat`
                : "#eee",
              sm: props.fileName
                ? `#fff url(/${props.fileName}) no-repeat`
                : "#eee",
            },
            backgroundSize: { xs: "contain", sm: "contain" },
            backgroundPosition: { xs: "top", sm: "top" },
            height: { xs: "50vh", sm: "75vh" },
            display: { xs: "flex", sm: "flex" },
            justifyContent: { xs: "center", sm: "center" },
            alignItems: { xs: "center", sm: "center" },
          }}
        />
      </Grid>
      {props.onClick && (
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 5,
            }}
          >
            <Button
              variant="contained"
              onClick={props.onClick}
              sx={{
                px: 5,
                py: 2,
                borderRadius: "30px",
                background: props.background,
                color: props.color,
              }}
            >
              予約フォームはこちらをクリック
            </Button>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
