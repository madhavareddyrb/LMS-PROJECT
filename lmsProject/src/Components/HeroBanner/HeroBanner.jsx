import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./HeroBanner.css"

export default function HeroBanner() {
  return (
    <>
      <Box className="main-course-cards">
        <Box className="hero-banner">
          <Typography variant="h2" gutterBottom>
            Learn Skills That Build Your Future
          </Typography>

          <Typography variant="h6">
            Our platform offers industry-relevant courses in technology,
            business, design, and personal development. Learn at your own pace
            with high-quality video lectures, real projects, quizzes, and
            certifications.
          </Typography>
          <button></button>
        </Box>
        <Box
          className="hero-banner"
         
        >
          <Typography>50,000 + Students</Typography>
          <Typography>200+ Courses</Typography>
          <Typography>100+ Expert Mentores</Typography>
          <Typography>Learners from 10+ Countries</Typography>
        </Box>
      </Box>
    </>
  );
}
