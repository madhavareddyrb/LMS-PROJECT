import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import "./TopCategories.css";

export default function DataScienceCategory() {
  const dataScienceData = [
    {
      id: 7,
      title: "Data Science with Python",
      instructor: "Amit Patel",
      rating: 4.7,
      students: 10500,
      price: 1299,
      tag: "Bestseller",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8EykgjQNV7llCQa3YCaCzM0tH8mTmtdnYA&s",
    },
    {
      id: 8,
      title: "Machine Learning A-Z",
      instructor: "Rohit Mehta",
      rating: 4.6,
      students: 8900,
      price: 1199,
      tag: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqamSe9HtW-lBDE8M9XfpLalcRsiRZOqBv4g&s",
    },
    {
      id: 9,
      title: "Data Analysis with Pandas",
      instructor: "Sneha Reddy",
      rating: 4.5,
      students: 7200,
      price: 799,
      tag: "Hot & New",
      image: "https://i.ytimg.com/vi/GPVsHOlRBBI/maxresdefault.jpg",
    },
  ];

  const categoryData = dataScienceData.map((data) => {
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

      <div className="AICatgoryFlex">{categoryData}</div>
    </>
  );
}
