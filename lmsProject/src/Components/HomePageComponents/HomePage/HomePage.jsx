import FeaturedCourses from "../FeaturedCourses/FeaturedCourses";
import HeroBanner from "../HeroBanner/HeroBanner";
import Navbar from "../Navbar/Navbar";
import TopCategories from "../TopCategories/TopCategories";
import WhyLearnWithUs from "../WhyLearnWithUs/WhyLearnWithUs";

export default function HomePage(){
  return (
    <>
      <Navbar />
      <HeroBanner />
      <WhyLearnWithUs />
      <TopCategories />
      <FeaturedCourses />
    </>
  );
}