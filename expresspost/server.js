import express from 'express';
const app = express();
app.use(express.json());
let user = [
  {
    id: 1,
    username: "Aryan",
    password: "1234"
  },
  {
    id: 2,
    username: "John",
    password: "abcd"
  },
  {
    id: 3,
    username: "Doe",
    password: "xyz"
  }
];

app.get('/', (req, res) => {
  res.send(200).json({
    message: "home route",
  });
})

app.get('/user', (req, res) => {
  res.status(200).json({
    message: "user data",
    user,
  });
});

// app.post('/user', (req, res) => {
//   console.log(req.body);
//   const { username, password } = req.body;
//   if (!username || !password) {
//     returners.status(400).status("Username and password are required");
//   }
//   if (password.length < 6) {
//     return res.send("Password must be at least 6 characters long");
//   }
//   let newuser = {
//     id: user.length + 1,
//     // username,
//     // password,
//     ...req.body
//   };
//   user.push(newuser);
//   res.status(200).json({
//     message: "post user data",
//   });
// });
app.post("/user", (req, res) => {
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  const users = JSON.parse(data);

  users.push(req.body);

  fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));

  res.json({ message: "User saved to file" });
});

app.listen(4000, () => console.log("Server running"));
