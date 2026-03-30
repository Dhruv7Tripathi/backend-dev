const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const loggingMiddleware = require("./middleware/logging");

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggingMiddleware);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/api/employees", require("./routes/employeeRoute"));
app.use("/", require("./routes/pageRoute"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));