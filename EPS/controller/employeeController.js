const { v4: uuidv4 } = require("uuid");
let employees = require("../model/data");

// Salary Calculation
const calculateSalary = (basicSalary) => {
  const HRA = basicSalary * 0.20;
  const DA = basicSalary * 0.10;
  const PF = basicSalary * 0.05;

  const netSalary = basicSalary + HRA + DA - PF;

  return { HRA, DA, PF, netSalary };
};

// CREATE
exports.createEmployee = async (req, res) => {
  const { name, email, department, basicSalary, joiningDate } = req.body;

  const employee = {
    id: uuidv4(),
    name,
    email,
    department,
    basicSalary: Number(basicSalary),
    joiningDate
  };

  employees.push(employee);
  res.status(201).json(employee);
};

// READ ALL
exports.getEmployees = async (req, res) => {
  res.status(200).json(employees);
};

// READ ONE
exports.getEmployee = async (req, res) => {
  const employee = employees.find(emp => emp.id === req.params.id);
  if (!employee) return res.status(404).json({ message: "Employee not found" });

  res.status(200).json(employee);
};

// UPDATE
exports.updateEmployee = async (req, res) => {
  const index = employees.findIndex(emp => emp.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Employee not found" });

  employees[index] = { ...employees[index], ...req.body };
  res.status(200).json(employees[index]);
};

// DELETE
exports.deleteEmployee = async (req, res) => {
  employees = employees.filter(emp => emp.id !== req.params.id);
  res.status(200).json({ message: "Employee deleted successfully" });
};

// PAYROLL API
exports.calculatePayroll = async (req, res) => {
  const employee = employees.find(emp => emp.id === req.params.id);
  if (!employee) return res.status(404).json({ message: "Employee not found" });

  const salaryDetails = calculateSalary(employee.basicSalary);
  res.status(200).json({ ...employee, ...salaryDetails });
};