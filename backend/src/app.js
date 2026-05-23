import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

//In Express.js, middleware is a function that runs between the request and the response.
app.use(express.json()); //This middleware converts JSON request bodies into JavaScript objects.

// import routes
import userRouter from "./routes/user.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);

//Example route; http://localhost:4000/api/v1/users/register
export default app;