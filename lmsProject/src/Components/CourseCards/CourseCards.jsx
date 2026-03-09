import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./CourseCards.css"
export default function MediaCard() {
  const coursesList = [
    {
      course_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRw7Ij_fITDOI04BuF06MREDgpVZJ8rKJJh8o7uL6__rikTmxEPBjEco-ZHFYzBuGn_RqVYaqJhIo_AJky_6oxW-SflCCvxivHjCd89fs&s=10",
      course_name: "Frontend Developer",
      course_description:
        "A Front-End Developer is someone who creates websites and web applications.",
      course_link: "#frontend",
    },
    {
      course_image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp",
      course_name: "Backend Developer",
      course_description:
        "Backend development handles the server-side logic, database, and core functionality of web applications",
      course_link: "#frontend",
    },
    {
      course_image:
        "https://kinsta.com/wp-content/uploads/2021/11/Untitled-48.png",
      course_name: "Full Stack Developer",
      course_description:
        "A full-stack web developer is a person who can develop both client and server software",
      course_link: "#frontend",
    },
    // {
    //   course_image:
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png",
    //   course_name: "Frontend Developer",
    //   course_description: "Become a Frontend Developer within 3 months",
    //   course_link: "#frontend",
    // },
  ];

  const displayCourses = coursesList.map(function (course) {
    return (
      <>
      <div className="courseCards">

        <Card sx={{ maxWidth: 450, maxHeight:450 }}>
          <CardMedia
            sx={{ height: 170, width: 360, }}
            image={course.course_image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.course_name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {course.course_description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More Details</Button>
          </CardActions>
        </Card>
            </div>
      </>
    );
  });

  return <>
  <div className="displayCoursesflex">

  {displayCourses}
  </div>
  
  </>;
}
