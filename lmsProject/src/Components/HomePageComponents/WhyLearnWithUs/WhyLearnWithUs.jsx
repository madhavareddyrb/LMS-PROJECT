import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./WhyLearnWithUs.css";

export default function WhyLearnWithUs() {
  const features = [
    {
      title: "⭐ Expert Instructors",
      message: " Learn from industry professionals",
    },
    {
      title: "📚 Hands-on Projects",
      message: "Build real-world applications.",
    },
    {
      title: "⏰ Flexible Learning",
      message: "Learn anytime, anywhere.",
    },
    {
      title: "🏆 Certification",
      message: "Get certificates to showcase your skills.",
    },
  ];

  const featuresData = features.map((feature) => {
    return (
      <>
        <div className="feature-card">
          <h2>{feature.title}</h2>
          <p>{feature.message}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <h2 className="heading-why">Why Learn With Us</h2>
      <h4 className="heading-message">
        We focus on practical, real-world learning that helps you grow your
        career
      </h4>
      <div className="features-card">{featuresData}</div>
    </>
  );
}
