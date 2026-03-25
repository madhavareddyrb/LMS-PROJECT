import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import "./TopCategories.css";

export default function AICategory() {
  const aiData = [
    {
      id: 5,
      title: "AI & Machine Learning Bootcamp",
      instructor: "Karthik R",
      rating: 4.7,
      students: 9500,
      price: 1499,
      tag: "Premium",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUmjc10OK_06y5eOynvj_EmBoJkAW7wHzPQ&s",
    },
    {
      id: 6,
      title: "Generative AI with ChatGPT",
      instructor: "Suresh Kumar",
      rating: 4.8,
      students: 11200,
      price: 1199,
      tag: "Bestseller",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYKvV-SBvzrVFHvKbF3Lb9kP6K3juj1OQ5Q&s",
    },
    {
      id: 7,
      title: "AI Agents & Automation",
      instructor: "Priya Singh",
      rating: 4.6,
      students: 7600,
      price: 999,
      tag: "Hot & New",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgu8DQaC8DNJguGYc81iNDozgDp4cddQHPw&s",
    },
    {
      id: 8,
      title: "AI Agents & Automation",
      instructor: "Priya Singh",
      rating: 4.6,
      students: 7600,
      price: 999,
      tag: "Hot & New",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgu8DQaC8DNJguGYc81iNDozgDp4cddQHPw&s",
    },
  ];

  const categoryAI = aiData.map((data) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={data.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {data.instructor}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <button className="action-button">{data.rating}</button>
          <button className="action-button">Enrolled:{data.students}</button>
          <button className="action-button tag-button">{data.tag}</button>
        </CardActions>
        <button className="action-button">Price: ₹{data.price}</button>
      </Card>
    );
  });
  return (
    <>

      <div className="AICatgoryFlex">{categoryAI}</div>
    </>
  );
}
