import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./routes/users.js";
import currencyRouter from "./routes/exchange.js";
import postsRouter from "./routes/posts.js";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.use("/currency", currencyRouter);
app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});