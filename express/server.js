const express = require('express');
const app = express();
const PORT = 4000;


app.get('/', (req, res) => {
  res.status(200).send('Server is running');
}
);
app.get('/userdetails', (req, res) => {
  res.status(200).send('Contact us at contact@example.com');
});
app.get('/about', (req, res) => {
  let user = {
    name: "John Doe",
    age: 30,
    occupation: "Developer"
  }
  res.status(200).send('This is the about page');
}
);
app.use((req, res) => {
  res.status(404).send('Page not found');
}
);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});