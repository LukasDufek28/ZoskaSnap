// src/app/prispevok/page.tsx

import { PrismaClient } from "@prisma/client";
import { Box, Container, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

export const metadata = { title: "Pridat prispevok | ZoškaSnap" };

const prisma = new PrismaClient();

export default async function PostListing() {
  // Fetch posts and their corresponding user profile data
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Pridat prispevok
      </Typography>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia 
                component="img"
                alt={post.caption}
                height="140"
                image={post.imageUrl}/>
              <CardContent>
                <Typography variant="h6" component="div">
                  {post.user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.caption}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
