import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import "./TopCategories.css";

export default function WebDevCategory() {
  const webDev = [
    {
      id: 1,
      title: "Complete MERN Stack Development",
      instructor: "Rahul Sharma",
      rating: "⭐ 4.8",
      students: 12500,
      price: 1299,
      tag: "Bestseller",
      image:
        "https://d1fn6xu754v319.cloudfront.net/MERN_Stack_9437df2ba9_62af1dd3fc.png",
    },
    {
      id: 2,
      title: "Frontend Mastery with React",
      instructor: "Ankit Verma",
      rating: "⭐ 4.7",
      students: 9800,
      price: 999,
      tag: "Hot & New",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KgzFalKTDgKOxI5BnuKCuCXZswTAYRkg3A&s",
    },
    {
      id: 3,
      title: "Advanced JavaScript Concepts",
      instructor: "Neha Gupta",
      rating: "⭐ 4.4",
      students: 8700,
      price: 899,
      tag: "",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
    },
    {
      id: 4,
      title: "Backend Developement",
      instructor: "V Shiva Kumar",
      rating: "⭐ 5",
      students: 870,
      price: 1000,
      tag: "Best Seller",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
    },
  ];

  const categoryWeb = webDev.map((data) => {
    return (
      <>
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
            <CardActions>
              <button className="action-button">{data.rating}</button>
              <button className="action-button">
                Enrolled:{data.students}
              </button>
              <button className="action-button tag-button">{data.tag}</button>
            </CardActions>
            <button className="action-button">Price: ₹{data.price}</button>
          </CardActionArea>
        </Card>
      </>
    );
  });
  return (
    <>
      <div className="webdevFlex">{categoryWeb}</div>
    </>
  );
}
