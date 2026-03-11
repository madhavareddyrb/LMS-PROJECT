import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HeroBanner() {
  return (
    <>
    <Box sx={{display:"flex"}}>

      <Box sx={{ width: "50%", maxWidth: "50%" }}>
        <Typography variant="h2" gutterBottom>
          Learn Skills That Build Your Future
        </Typography>
        <Typography variant="h5" gutterBottom>
          Join thousands of learners mastering in-demand skills with expert
          instructors, hands-on projects, and career-focused courses designed
          for real-world success.
        </Typography>
        <Typography variant="h6">
          Our platform offers industry-relevant courses in technology, business,
          design, and personal development. Learn at your own pace with
          high-quality video lectures, real projects, quizzes, and
          certifications.
        </Typography>
        <button>
          
        </button>
      </Box>
      <Box sx={{  maxWidth: "50%", alignContent:"center", justifyContent:"center" }}>
        <Typography>50,000 + Students</Typography>
        <Typography>200+ Courses</Typography>
        <Typography>100+ Expert Mentores</Typography>
        <Typography>Learners from 10+ Countries</Typography>
      </Box>
    </Box>
    </>
  );
}
