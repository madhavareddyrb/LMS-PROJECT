import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import WebDevCategory from "./WebDevCategory";
import AICategory from "./aiCategory";
import DataScienceCategory from "./DataScienceCategory";




export default function TopCategories() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const Categories = [
  //   "Web Development",
  //   "Artificial Intelligence (AI)",
  //   "Data Science",
  //   "Digital Marketing",
  // ];

  // const tabs = Categories.map((category, index) => {
  //   return (
  //     <>
  //       <Tab label={category} value={index} />
  //     </>
  //   );
  // });

  return (
    <>
      <h2 className="top-Categories">Top Categories</h2>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Web Development" value="1" />
              <Tab label="Artificial Intelligence (AI)" value="2" />
              <Tab label="Data Science" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <WebDevCategory />
          </TabPanel>
          <TabPanel value="2">
            <AICategory />
          </TabPanel>
          <TabPanel value="3">
            <DataScienceCategory />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}
