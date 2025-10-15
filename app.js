import express from "express";
import employees from "#db/employees"; // ES module import

const app = express();

// path, callback
app.get("/", (request, response) => {
  response.send("Hello employees!");
});

// GET /employees
app.get("/employees", (request, response) => {
    response.status(200).json(employees);
});

// GET /employees/:id
app.get("/employees/:id", (request, response) => {
    const employeeId = Number(request.params.id);
    const foundEmployee = employees.find((employee) => employee.id === employeeId);

    if (!foundEmployee) {
        return response.status(404).send("Employee not found");
    }
    response.status(200).json(foundEmployee);
});

export default app;