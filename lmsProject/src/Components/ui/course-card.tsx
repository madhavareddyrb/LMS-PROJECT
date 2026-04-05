import * as React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  name: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  tag?: string;
  imageAlt?: string;
}

const CourseCard = React.forwardRef<HTMLDivElement, CourseCardProps>(
  (
    {
      className,
      imageUrl,
      name,
      instructor,
      price,
      rating,
      students,
      tag,
      imageAlt = "Course Image",
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group w-full max-w-sm overflow-hidden rounded-xl border bg-card shadow-sm hover:shadow-lg transition-all",
          className,
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, y: -5 }}
        {...props}
      >
        {/* Image */}
        <div className="overflow-hidden relative">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-60 w-full object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Tag Badge */}
          {tag && (
            <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
              {tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="font-bold text-primary">₹{price}</p>
          </div>

          <p className="text-sm text-muted-foreground">{instructor}</p>

          <div className="flex justify-between text-sm items-center">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-500" />
              <span>{rating}</span>
            </div>

            <span className="text-muted-foreground">
              {students.toLocaleString()} students
            </span>
          </div>
        </div>
      </motion.div>
    );
  },
);

CourseCard.displayName = "CourseCard";

export default CourseCard;
