import CourseCard from "@/Components/ui/course-card";
// import { webDev } from "@/data/courses";
import { ai } from "./data/aicourses";


export default function AICategory() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {ai.map((course) => (
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
