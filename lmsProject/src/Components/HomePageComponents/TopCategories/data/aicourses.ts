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

export const ai: Course[] = [
  {
    id: 5,
    title: "AI & Machine Learning Bootcamp",
    instructor: "Karthik R",
    rating: 4.7,
    students: 9500,
    price: 1499,
    tag: "Premium",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUmjc10OK_06y5eOynvj_EmBoJkAW7wHzPQ&s",
  },
  {
    id: 6,
    title: "Generative AI with ChatGPT",
    instructor: "Suresh Kumar",
    rating: 4.8,
    students: 11200,
    price: 1199,
    tag: "Bestseller",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYKvV-SBvzrVFHvKbF3Lb9kP6K3juj1OQ5Q&s",
  },
  {
    id: 7,
    title: "AI Agents & Automation",
    instructor: "Priya Singh",
    rating: 4.6,
    students: 7600,
    price: 999,
    tag: "Hot & New",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgu8DQaC8DNJguGYc81iNDozgDp4cddQHPw&s",
  },
  {
    id: 8,
    title: "AI Agents & Automation",
    instructor: "Priya Singh",
    rating: 4.6,
    students: 7600,
    price: 999,
    tag: "Hot & New",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgu8DQaC8DNJguGYc81iNDozgDp4cddQHPw&s",
  },
];
