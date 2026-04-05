// // // // import Card from "@mui/material/Card";
// // // // import CardContent from "@mui/material/CardContent";
// // // // import CardMedia from "@mui/material/CardMedia";
// // // // import Typography from "@mui/material/Typography";
// // // // import Button from "@mui/material/Button";
// // // // import CardActionArea from "@mui/material/CardActionArea";
// // // // import CardActions from "@mui/material/CardActions";
// // // // import "./TopCategories.css";

// // // // export default function WebDevCategory() {
// // //   // const webDev = [
// // //   //   {
// // //   //     id: 1,
// // //   //     title: "Complete MERN Stack Development",
// // //   //     instructor: "Rahul Sharma",
// // //   //     rating: "⭐ 4.8",
// // //   //     students: 12500,
// // //   //     price: 1299,
// // //   //     tag: "Bestseller",
// // //   //     image:
// // //   //       "https://d1fn6xu754v319.cloudfront.net/MERN_Stack_9437df2ba9_62af1dd3fc.png",
// // //   //   },
// // //   //   {
// // //   //     id: 2,
// // //   //     title: "Frontend Mastery with React",
// // //   //     instructor: "Ankit Verma",
// // //   //     rating: "⭐ 4.7",
// // //   //     students: 9800,
// // //   //     price: 999,
// // //   //     tag: "Hot & New",
// // //   //     image:
// // //   //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KgzFalKTDgKOxI5BnuKCuCXZswTAYRkg3A&s",
// // //   //   },
// // //   //   {
// // //   //     id: 3,
// // //   //     title: "Advanced JavaScript Concepts",
// // //   //     instructor: "Neha Gupta",
// // //   //     rating: "⭐ 4.4",
// // //   //     students: 8700,
// // //   //     price: 899,
// // //   //     tag: "",
// // //   //     image:
// // //   //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
// // //   //   },
// // //   //   {
// // //   //     id: 4,
// // //   //     title: "Backend Developement",
// // //   //     instructor: "V Shiva Kumar",
// // //   //     rating: "⭐ 5",
// // //   //     students: 870,
// // //   //     price: 1000,
// // //   //     tag: "Best Seller",
// // //   //     image:
// // //   //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
// // //   //   },
// // //   // ];

// // // //   const categoryWeb = webDev.map((data) => {
// // // //     return (
// // // //       <>
// // // //         <Card sx={{ maxWidth: 345 }}>
// // // //           <CardActionArea>
// // // //             <CardMedia
// // // //               component="img"
// // // //               height="200"
// // // //               image={data.image}
// // // //               alt="green iguana"
// // // //             />
// // // //             <CardContent>
// // // //               <Typography gutterBottom variant="h5" component="div">
// // // //                 {data.title}
// // // //               </Typography>
// // // //               <Typography variant="body2" sx={{ color: "text.secondary" }}>
// // // //                 {data.instructor}
// // // //               </Typography>
// // // //             </CardContent>
// // // //             <CardActions>
// // // //               <button className="action-button">{data.rating}</button>
// // // //               <button className="action-button">
// // // //                 Enrolled:{data.students}
// // // //               </button>
// // // //               <button className="action-button tag-button">{data.tag}</button>
// // // //             </CardActions>
// // // //             <button className="action-button">Price: ₹{data.price}</button>
// // // //           </CardActionArea>
// // // //         </Card>
// // // //       </>
// // // //     );
// // // //   });
// // // //   return (
// // // //     <>
// // // //       <div className="webdevFlex">{categoryWeb}</div>
// // // //     </>
// // // //   );
// // // // }

// // // // components/ui/property-card.tsx
// // // import * as React from "react";
// // // import { motion } from "framer-motion";
// // // import { MapPin, Star } from "lucide-react";
// // // import { cn } from "@/lib/utils"; // Assuming you have a cn utility from shadcn

// // // // Define the props for the component

// // // type Course = {
// // //   id: number;
// // //   title: string;
// // //   instructor: string;
// // //   rating: number;
// // //   students: number;
// // //   price: number;
// // //   tag?: string;
// // //   image: string;
// // // };

// // // const webDev: Course[] = [
// // //   {
// // //     id: 1,
// // //     title: "Complete MERN Stack Development",
// // //     instructor: "Rahul Sharma",
// // //     rating:  4.8,
// // //     students: 12500,
// // //     price: 1299,
// // //     tag: "Bestseller",
// // //     image:
// // //       "https://d1fn6xu754v319.cloudfront.net/MERN_Stack_9437df2ba9_62af1dd3fc.png",
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Frontend Mastery with React",
// // //     instructor: "Ankit Verma",
// // //     rating: 4.7,
// // //     students: 9800,
// // //     price: 999,
// // //     tag: "Hot & New",
// // //     image:
// // //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KgzFalKTDgKOxI5BnuKCuCXZswTAYRkg3A&s",
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Advanced JavaScript Concepts",
// // //     instructor: "Neha Gupta",
// // //     rating: 4.4,
// // //     students: 8700,
// // //     price: 899,
// // //     tag: "",
// // //     image:
// // //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Backend Developement",
// // //     instructor: "V Shiva Kumar",
// // //     rating: 5,
// // //     students: 870,
// // //     price: 1000,
// // //     tag: "Best Seller",
// // //     image:
// // //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
// // //   },
// // // ];

// // // // Animation variants for Framer Motion
// // // const cardVariants = {
// // //   hidden: { opacity: 0, y: 20 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: {
// // //       duration: 0.4,
// // //       ease: "easeInOut",
// // //     },
// // //   },
// // // };

// // // const textVariants = {
// // //   hidden: { opacity: 0, y: 10 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: {
// // //       duration: 0.3,
// // //       ease: "easeOut",
// // //     },
// // //   },
// // // };

// // // type CardProps = {
// // //   name: string;
// // //   price: number;
// // //   imageUrl: string;
// // //   imageAlt: string;
// // //   rating: number | string;
// // // };

// // import { PropertyCard } from "@/components/ui/property-card";

// // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //   {webDev.map((course) => (
// //     <PropertyCard
// //       key={course.id}
// //       name={course.title}
// //       instructor={course.instructor}
// //       price={course.price}
// //       rating={
// //         typeof course.rating === "string"
// //           ? parseFloat(course.rating.replace("⭐", ""))
// //           : course.rating
// //       }
// //       students={course.students}
// //       imageUrl={course.image}
// //       imageAlt={course.title}
// //     />
// //   ))}
// // </div>;
// import * as React from "react";
// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import { cn } from "@/lib/utils";

// export type Course = {
//   id: number;
//   title: string;
//   instructor: string;
//   rating: number;
//   students: number;
//   price: number;
//   tag?: string;
//   image: string;
// };

// export const webDev: Course[] = [
//   {
//     id: 1,
//     title: "Complete MERN Stack Development",
//     instructor: "Rahul Sharma",
//     rating: 4.8,
//     students: 12500,
//     price: 1299,
//     tag: "Bestseller",
//     image:
//       "https://d1fn6xu754v319.cloudfront.net/MERN_Stack_9437df2ba9_62af1dd3fc.png",
//   },
//   {
//     id: 2,
//     title: "Frontend Mastery with React",
//     instructor: "Ankit Verma",
//     rating: 4.7,
//     students: 9800,
//     price: 999,
//     tag: "Hot & New",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KgzFalKTDgKOxI5BnuKCuCXZswTAYRkg3A&s",
//   },
//   {
//     id: 3,
//     title: "Advanced JavaScript Concepts",
//     instructor: "Neha Gupta",
//     rating: 4.4,
//     students: 8700,
//     price: 899,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
//   },
//   {
//     id: 4,
//     title: "Backend Development",
//     instructor: "V Shiva Kumar",
//     rating: 5,
//     students: 870,
//     price: 1000,
//     tag: "Bestseller",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQ_A1YpPDcscDaiVTYKnCVn2foc3piDKWXg&s",
//   },
// ];

// // components/ui/course-card.tsx


// // import { CourseCard } from "@/components/ui/course-card";
// // import { webDev } from "@/data/courses";

// interface CourseCardProps extends React.HTMLAttributes<HTMLDivElement> {
//   imageUrl: string;
//   name: string;
//   instructor: string;
//   price: number;
//   rating: number;
//   students: number;
//   imageAlt?: string;
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: "easeInOut" },
//   },
// };

// const textVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.3, ease: "easeOut" },
//   },
// };

// const CourseCard = React.forwardRef<HTMLDivElement, CourseCardProps>(
//   (
//     {
//       className,
//       imageUrl,
//       name,
//       instructor,
//       price,
//       rating,
//       students,
//       imageAlt = "Course Image",
//       ...props
//     },
//     ref,
//   ) => {
//     return (
//       <motion.div
//         ref={ref}
//         className={cn(
//           "group w-full max-w-sm overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-lg transition-all",
//           className,
//         )}
//         variants={cardVariants}
//         initial="hidden"
//         animate="visible"
//         whileHover={{ scale: 1.03, y: -5 }}
//         {...props}
//       >
//         {/* Image */}
//         <div className="overflow-hidden">
//           <img
//             src={imageUrl}
//             alt={imageAlt}
//             className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-500"
//           />
//         </div>

//         {/* Content */}
//         <div className="p-4 space-y-3">
//           <div className="flex justify-between">
//             <motion.h3
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="font-semibold text-lg"
//             >
//               {name}
//             </motion.h3>

//             <motion.p
//               variants={textVariants}
//               initial="hidden"
//               animate="visible"
//               className="font-bold text-primary"
//             >
//               ₹{price}
//             </motion.p>
//           </div>

//           <p className="text-sm text-muted-foreground">{instructor}</p>

//           <div className="flex justify-between text-sm">
//             <div className="flex items-center gap-1">
//               <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
//               <span>{rating}</span>
//             </div>

//             {/* <span className="text-muted-foreground">
//               {students.toLocaleString()} students
//             </span> */}
//           </div>
//         </div>
//       </motion.div>
//     );
//   },
// );

// CourseCard.displayName = "CourseCard";

// export default  CourseCard ;


// // export default function CoursesPage() {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //       {webDev.map((course) => (
// //         <CourseCard
// //           key={course.id}
// //           name={course.title}
// //           instructor={course.instructor}
// //           price={course.price}
// //           rating={course.rating}
// //           students={course.students}
// //           imageUrl={course.image}
// //           imageAlt={course.title}
// //         />
// //       ))}
// //     </div>
// //   );
// // }


// import CourseCard from "@/components/ui/course-card";
import CourseCard from "@/Components/ui/course-card";
import { webDev } from "./data/webdevcourses";


export default function CoursesPage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {webDev.map((course) => (
        <CourseCard
          key={course.id}
          name={course.title}
          instructor={course.instructor}
          price={course.price}
          rating={course.rating}
          students={course.students}
          imageUrl={course.image}
          imageAlt={course.title}
          tag={course.tag}
        />
      ))}
    </div>
  );
}
