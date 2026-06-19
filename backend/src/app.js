import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

//In Express.js, middleware is a function that runs between the request and the response.
app.use(express.json()); //This middleware converts JSON request bodies into JavaScript objects.

// import routes
import userRouter from "./routes/user.routes.js";     // For authentification
import postRouter from "./routes/post.routes.js";     // For POST
import cartRouter from "./routes/cart.routes.js";     // For cart
import orderRouter from "./routes/order.routes.js";   // For order
//import emailRouter from "./routes/email.order.routes.js";   // For order email



//routes declaration
app.use("/api/v1/users", userRouter);                  // For authentification
app.use("/api/v1/posts", postRouter);                  // For POST
app.use("/api/v1/cart", cartRouter);                   // For cart
app.use("/api/v1/orders", orderRouter);                // For order
//app.use("/api/v1/email", emailRouter);                 // For order email


//Example route for users; http://localhost:4000/api/v1/users/register
//Example route for posts; http://localhost:4000/api/v1/posts/create
export default app;