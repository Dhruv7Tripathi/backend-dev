let employees = require("../model/data");

exports.homePage = (req, res) => {
  res.render("home", { employees });
};

exports.addEmployeePage = (req, res) => {
  res.render("employeeForm");
};

exports.editEmployeePage = (req, res) => {
  const employee = employees.find(emp => emp.id === req.params.id);
  res.render("employeeEdit", { employee });
};