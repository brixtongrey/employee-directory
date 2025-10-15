import express from "express";
import employees from "#db/employees"; // ES module import

const app = express();

// path, callback
app.get("/", (request, response) => {
  response.send("Hello employees!");
});

export default app;