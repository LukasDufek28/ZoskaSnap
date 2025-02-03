import { Container, Typography, Box, Button } from "@mui/material";

export const metadata = { title: "O nás | ZoškaSnap" };

export default function About() {
  return (
    <main>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 6,
        }}
      >
        {/* Title */}
        <Typography variant="h2" color="primary" gutterBottom>
          O nás
        </Typography>

        {/* Description */}
        <Typography variant="h5" color="text.secondary" paragraph sx={{ textAlign: "center", maxWidth: 800 }}>
          ZoškaSnap is an Instagram-like platform built for students to share and explore school moments.
          Our goal is to bring the school community together through photos, stories, and memories. Whether youre
          showcasing school events or your personal moments, ZoškaSnap is your go-to app.
        </Typography>

        {/* Contact Section */}
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h5" color="text.secondary" paragraph>
            Have any questions? Feel free to reach out to us!
          </Typography>
          <Button variant="contained" color="secondary" href="https://zochova.sk" target="_blank">
            Visit Our Website
          </Button>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" href="https://www.facebook.com/spsezochova" target="_blank">
              Follow Us on Facebook
            </Button>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
