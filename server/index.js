require("dotenv").config();
const express = require("express");
const cors = require("cors");
const post = require("./routes/post");

const app = express();

require("./db/db")();

app.use(express.json());
app.use(cors());
app.use("/posts", post);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));
