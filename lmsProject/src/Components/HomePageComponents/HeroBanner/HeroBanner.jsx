import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./HeroBanner.css";

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
          <button className="action-buttons">Start Learning Today ➡️</button>
          <button className="action-buttons"> Browse Courses</button>
        </Box>
        <Box className="hero-banner heroBanner-actions ">
          <button className="action-words">1,000 + Students</button>
          <button className="action-words">20+ Courses</button>
          <button className="action-words">10+ Expert Mentores</button>
          <button className="action-words">
            Learners from 10+ Countries
          </button>
        </Box>
      </Box>
    </>
  );
}
