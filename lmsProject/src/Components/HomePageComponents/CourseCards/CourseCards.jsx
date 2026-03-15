import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./CourseCards.css";
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
          <Card sx={{ maxWidth: 450, maxHeight: 450 }}>
            <CardMedia
              sx={{ height: 170, width: 400 }}
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

        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="displayCoursesflex">{displayCourses}</div>
    </>
  );
}
