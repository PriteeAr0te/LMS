require("dotenv").config();
const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["https://lms-plum-sigma.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
// app.use(cors());

const port = 5000;

connectToMongo();

//use this middleware if you are using req.body
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/course", require("./routes/course"));

app.listen(port, () => {
  console.log(`App Listening on port: ${port}`);
});
