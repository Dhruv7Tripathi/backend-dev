import expresss from 'express';
const app = expresss();


let middleware = (req, res, next) => {
  console.log("Middleware executed");
  next();
}
let middleware2 = (req, res, next) => {
  console.log("Middleware2 executed");
  next();
}


app.get('/', middleware, middleware2, (req, res) => {
  res.status(200).json({
    message: "home route with middleware",
  });
});