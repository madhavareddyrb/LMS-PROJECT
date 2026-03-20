import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const courses = [
  {
    id: 1,
    title: "Generative AI",
    image: "https://source.unsplash.com/400x300/?ai",
  },
  {
    id: 2,
    title: "IT Certifications",
    image: "https://source.unsplash.com/400x300/?technology",
  },
  {
    id: 3,
    title: "Data Science",
    image: "https://source.unsplash.com/400x300/?data",
  },
];

export default function FeaturedCourses() {
  return (
    <Box sx={{ display: "flex", gap: 4, p: 6 }}>
      {/* LEFT SECTION */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" fontWeight="bold">
          Learn <span style={{ fontStyle: "italic" }}>essential</span> career
          and life skills
        </Typography>

        <Typography sx={{ mt: 2, color: "gray" }}>
          Build in-demand skills fast and advance your career in a changing job
          market.
        </Typography>
      </Box>

      {/* RIGHT SECTION */}
      <Grid container spacing={3} sx={{ flex: 2 }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
            >
              {/* IMAGE */}
              <CardMedia component="img" height="200" image={course.image} />

              {/* OVERLAY CONTENT */}
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  bgcolor: "rgba(255,255,255,0.9)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography fontWeight="bold">{course.title}</Typography>

                <Typography>→</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
