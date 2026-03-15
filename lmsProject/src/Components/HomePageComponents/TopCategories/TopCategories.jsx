import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardActionArea,
  CardMedia,
} from "@mui/material";

import "./TopCategories.css";

export default function TopCategories() {
  const webDevData = [
    {
      id: 1,
      title: "Frontend Web Development",
      instructor: "John Smith",
      level: "Beginner",
      duration: "20 Hours",
      students: "12,540",
      rating: 4.7,
      price: "₹999",
      description:
        "Learn HTML, CSS, JavaScript and build responsive websites using modern frontend tools.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
    {
      id: 2,
      title: "Backend Development with Node.js",
      instructor: "Michael Brown",
      level: "Intermediate",
      duration: "25 Hours",
      students: "9,210",
      rating: 4.6,
      price: "₹1299",
      description:
        "Build scalable backend applications using Node.js, Express, APIs, and databases.",
      skills: ["Node.js", "Express", "REST API", "MongoDB"],
    },
    {
      id: 3,
      title: "MERN Stack Full Course",
      instructor: "David Wilson",
      level: "Intermediate",
      duration: "40 Hours",
      students: "18,320",
    },
    {
      id: 3,
      title: "MERN Stack Full Course",
      instructor: "David Wilson",
      level: "Intermediate",
      duration: "40 Hours",
      students: "18,320",
      rating: 4.8,
      price: "₹1999",
      description:
        "Build full stack web applications using MongoDB, Express, React, and Node.js with real-world projects.",
      skills: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      id: 4,
      title: "PHP Web Development",
      instructor: "James Anderson",
      level: "Beginner",
      duration: "22 Hours",
      students: "7,850",
      rating: 4.5,
      price: "₹899",
      description:
        "Learn PHP from scratch and build dynamic websites with MySQL database integration.",
      skills: ["PHP", "MySQL", "Server-side Programming"],
    },
    {
      id: 5,
      title: "Python for Web Development",
      instructor: "Sarah Johnson",
      level: "Beginner",
      duration: "30 Hours",
      students: "11,200",
      rating: 4.7,
      price: "₹1499",
      description:
        "Learn how to build web applications using Python frameworks like Django and Flask.",
      skills: ["Python", "Django", "Flask", "Backend Development"],
    },
    {
      id: 6,
      title: "Java Web Development",
      instructor: "Robert Taylor",
      level: "Intermediate",
      duration: "35 Hours",
      students: "9,640",
      rating: 4.6,
      price: "₹1599",
      description:
        "Build enterprise-level web applications using Java, Spring Boot, and REST APIs.",
      skills: ["Java", "Spring Boot", "REST API", "Backend Development"],
    },
  ];

  const topCategoriesData = [
    {
      category: "Full Stack Development",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
    },
    {
      category: "Data Science",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
    },
    {
      category: "Ai agents",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
    },
    {
      category: "QA",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
    },
    {
      category: "Devops",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
    },
    {
      category: "Java",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
    },
    {
      category: "System Design",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
    },
    {
      category: "DSA",
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",
    },
  ];

  const webDevDisplay = webDevData.map((webDev) => {
    <Card></Card>;
  });

  return (
    <>
      <h3>Explore Top Learning Categories</h3>
      <h4>Web Development</h4>
      <div className="clssNmae">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Python Full Stack
              </Typography>
              <span>Shiva Kumar</span>
              <span>Begginer</span>
              <span>40Hours</span>
              <span>4.7</span>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                "Learn how to build web applications using Python frameworks
                like Django and Flask.",
              </Typography>
              <p>
                skills : ["Python", "Django", "Flask", "Backend Development"]
              </p>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Full Details
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
