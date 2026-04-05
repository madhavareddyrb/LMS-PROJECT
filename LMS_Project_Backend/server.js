// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     return res.end({
//       message: "This is my first server",
//     });
//   }
// });

// why express sending header, creating server for all apis is not good

const http = require("http");
const express = require("express");
const cors = require("cors");
const { cp } = require("fs");
const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*", // allow any frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // allow these methods
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  return res.send("Hi madhava");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);
  if (email === "Madhava" && password === "12345") {
    return res.send({
      email: email,
      password: password,
      message: "user login sucess",
    });
    
  } else {
    return res.send({
      message: "worng credentials",
    });
  }
});

// app.get("/man", (req, res) => {
//   return res.send("This is man paex");
// });

app.listen(3000, () => {
  console.log("server started");
});
