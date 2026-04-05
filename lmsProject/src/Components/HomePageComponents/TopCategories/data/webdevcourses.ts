export type Course = {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  tag?: string;
  image: string;
};

export const webDev: Course[] = [
  {
    id: 1,
    title: "Complete MERN Stack Development",
    instructor: "Rahul Sharma",
    rating: 4.8,
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
    rating: 4.7,
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
    rating: 4.4,
    students: 8700,
    price: 899,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
  },
  {
    id: 4,
    title: "Backend Development",
    instructor: "V Shiva Kumar",
    rating: 5,
    students: 870,
    price: 1000,
    tag: "Bestseller",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
  },
];
