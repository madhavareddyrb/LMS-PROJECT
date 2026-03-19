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

      {/* <div
        id="controls-carousel"
        class="relative w-full"
        data-carousel="static"
      >
        <div class="relative h-56 overflow-hidden rounded-base md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-1.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div
            class="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="/docs/images/carousel/carousel-2.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-3.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-4.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/docs/images/carousel/carousel-5.svg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-5 h-5 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-5 h-5 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div> */}
    </>
  );
}
