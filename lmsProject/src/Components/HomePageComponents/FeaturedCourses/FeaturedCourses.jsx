import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./FeaturedCourses.css";

export default function FeaturedCourses() {
  const featureCourses = [
    {
      title: "Complete Full Stack Development",
      message: " Learn MERN stack with real-world projects",
      review: "⭐ 4.8 | 12,000 students",
    },
    {
      title: "Data Science Bootcamp",
      message: "Python, machine learning, and analytics.",
      review: "⭐ 4.7 | 9,500 students",
    },
    {
      title: "UI/UX Design Masterclass",
      message: " Design modern user interfaces and experiences.",
      review: "⭐ 4.6 | 8,000 students",
    },
    // {
    //   title: "🏆 Certification",
    //   message: "Get certificates to showcase your skills.",
    //   review: "⭐ 4.8 | 12,000 students",
    // },
  ];

  const featureCoursesData = featureCourses.map((feature) => {
    return (
      <>
        <CardContent className="feature-card">
          <h2>{feature.title}</h2>

          <p>{feature.message}</p>
          <p>{feature.review}</p>
        </CardContent>
      </>
    );
  });

  return (
    <>
      <h2 className="heading-why">Featured Courses</h2>
      <h4 className="heading-message">
        Skills to transform your career and life
      </h4>
      <Card className="features-card">{featureCoursesData}</Card>
    </>
  );
}
