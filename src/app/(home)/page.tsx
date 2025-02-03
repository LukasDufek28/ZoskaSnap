import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { Container, Typography, Button, Box } from "@mui/material";
import AuthHomeView from "@/sections/AuthHomeView";

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return <NonAuthHomeView />;
    }

    return <AuthHomeView session={session} />;
  } catch (error) {
    console.error("Error fetching session:", error);
    return <NonAuthHomeView />;
  }
}

function NonAuthHomeView() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" color="primary" gutterBottom>
          Welcome to ZoškaSnap
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Your go-to app for sharing and exploring school moments. Join our community of students and share your memories!
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        size="large"
        href="/auth/registracia" // Update this to your sign-in route
        sx={{ padding: "10px 20px", fontSize: "1.2rem" }}
      >
        Sign In
      </Button>
    </Container>
  );
}
