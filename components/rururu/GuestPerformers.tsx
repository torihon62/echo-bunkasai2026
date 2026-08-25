/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Typography } from "@mui/material";
import YasuharaImg from "@/components/assets/YasuharaYoshito.jpg";
import GotoImg from "@/components/assets/GotoAtsushi.jpg";

import PCCenterMLeftText from "../PCCenterMLeftText";

export default function GuestPerformers() {
  return (
    <>
      <Grid container spacing={7} sx={{ pb: 3 }}>
        <Grid size={{ xs: 12, md: 2 }} />
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={YasuharaImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            安原 義人
          </PCCenterMLeftText>
          <Typography sx={{ justifyContent: "center", display: "flex" }}>
            ( ※ 3 回目のみ出演)
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }} />
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ p: { xs: 2, md: 0 } }}>
            <img src={GotoImg.src} alt="" className="rounded-full" />
          </Box>
          <PCCenterMLeftText sx={{ py: 2, fontSize: "x-large" }}>
            後藤 敦
          </PCCenterMLeftText>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }} />
      </Grid>
      <Box sx={{ py: { xs: 2, md: 4 } }} />
    </>
  );
}
