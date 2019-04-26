const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schemas");
const mongoose = require("mongoose");

app = express();

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
