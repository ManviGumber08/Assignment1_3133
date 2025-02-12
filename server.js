const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Body parser for JSON data
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Default Route
app.get("/", (req, res) => {
  res.send("GraphQL Server is Running! Go to /graphql to access GraphQL.");
});

// GraphQL API Route
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Enable GraphiQL for testing
  })
);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
