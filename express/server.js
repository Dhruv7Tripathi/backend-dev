// const express = require('express');
// const app = express();
// const PORT = 4000;


// app.get('/', (req, res) => {
//   res.status(200).send('Server is running');
// }
// );
// app.get('/userdetails', (req, res) => {
//   res.status(200).send('Contact us at contact@example.com');
// });
// let a = [1, 2, 3, 4, 5];
// app.get('/about', (req, res) => {
//   let user = {
//     name: "John Doe",
//     age: 30,
//     occupation: "Developer"
//   }
//   res.status(200).send('This is the about page');
// }
// );
// app.use((req, res) => {
//   res.status(404).send('Page not found');
// }
// );
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
const express = require("express");
const app = express();
const data = require("./data");

app.use(express.json());

app.get("/", (req, res) => {
  let ans = {
    message: "Server is running",
    status: "success"
  }
  res.status(200).json(ans);
});

app.get("/user", (req, res) => {
  res.status(200).json(data);
})

app.get("/user/page", (req, res) => {
  let name = req.query.name;
  let size = req.query.size;

  res.json({
    name: name,
    size: size
  });
})
app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = data.find(item => item.id === id);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "User not found"
    });
  }

  res.status(200).json({
    status: "success",
    data: user
  });
});


// const userRouter = require("./routes/user.routes.js");

// app.use("/api/users", userRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
