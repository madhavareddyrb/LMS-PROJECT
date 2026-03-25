import "./TeachWithUsBanner.css";
import Navbar from "../../HomePageComponents/Navbar/Navbar";

export default function TeachWithUsBanner() {
  const reasons_to_start = [
    {
      title: "Reach a Global Audience",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSae7QPlsFlhXS9sQIU6mWY252qINdu4ToF7w&s",
      message: "Share your knowledge with students from around the world.",
    },
    {
      title: "Flexible Teaching",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4cV6g_ggWPs_ULsGeAVT5d7Ks9wGXeEoYA&s",
      message: "Create and manage courses at your own pace.",
    },
    {
      title: "Build Your Brand",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsM5cyN-MnPYdTs9EAMVP8JN4lZvI96vQlLA&s",
      message: "Establish yourself as an expert in your field.",
    },
  ];

  const reasons_to_start_map = reasons_to_start.map((reason) => {
    return (
      <>
        <div className="reasons-to-start-map-div">
          <h3 className="">{reason.title}</h3>
          <img src={reason.logo} alt="icon" />
          <p>{reason.message}</p>
        </div>
      </>
    );
  });

  return (
    <>
      <Navbar />
      <div className="teachonAIO">
        <div className="teach-withus-message">
          <h3 className="heading-teach-withus">
            Teach the world <br />
            what you know{" "}
          </h3>
          <p>
            Join thousands of instructors and share your knowledge with millions
            of learners across the globe. <br /> Create courses, inspire
            students, and earn while you teach.
          </p>
          <button>Start Teaching Today</button>
        </div>
        <div>
          <img src="../src/AIO LMS project logo.png" alt="" />
        </div>
      </div>
      <h2 className="reasons-to-start">Why Teach With Us</h2>
      <div className="reasons-to-start-div">{reasons_to_start_map}</div>
    </>
  );
}
