import { createSlice } from "@reduxjs/toolkit";

const initialCourse = {
  title: "",
  instructor: "",
  category: "",
  rating: 4.7,
  students: 1200,
  price: 1000,
  tag: "",
  image: "",
};

export const CoursesSlice = createSlice({
  name: "Courses",
  initialState: initialCourse,
  reducers: {
    displayCourses: (state) => {
      state.title = "Web DEv";
      state.instructor = "Madhava";
      state.category = "Full Stack Web Development";
      state.rating = 5;
      state.students = 1000;
      state.price = 500;
      state.tag = "BestSeller";
      state.image =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8EykgjQNV7llCQa3YCaCzM0tH8mTmtdnYA&s";
    },
  },
});

export const {displayCourses} = CoursesSlice.actions
export default CoursesSlice.reducer