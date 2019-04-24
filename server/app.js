const express = require("express");
const graphqlHTTP = require("express-graphql");

app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(4000, () => {
  console.log("Server started on http://localhost:4000 ...");
});
