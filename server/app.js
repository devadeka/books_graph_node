const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schemas");
const mongoose = require("mongoose");
require("dotenv").config();

app = express();

mongoose
  .connect(process.env.DB_STRING, { useNewUrlParser: true })
  .then(console.log("Connected to MongoDB"))
  .catch(e => console.log(e));

mongoose.connection.once("open", () => {
  console.log("Properly connected");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server started on http://localhost:4000 ...");
});
