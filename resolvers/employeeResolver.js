const Employee = require("../models/Employee");
const { GraphQLString, GraphQLFloat, GraphQLList, GraphQLNonNull } = require("graphql");
const { EmployeeType } = require("../types/EmployeeType");

const employeeQueries = {
  getAllEmployees: {
    type: new GraphQLList(EmployeeType),
    async resolve() {
      return await Employee.find();
    },
  },
  getEmployeeById: {
    type: EmployeeType,
    args: { id: { type: new GraphQLNonNull(GraphQLString) } },
    async resolve(_, { id }) {
      return await Employee.findById(id);
    },
  },
};

const employeeMutations = {
  addEmployee: {
    type: EmployeeType,
    args: {
      first_name: { type: new GraphQLNonNull(GraphQLString) },
      last_name: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      gender: { type: new GraphQLNonNull(GraphQLString) },
      designation: { type: new GraphQLNonNull(GraphQLString) },
      salary: { type: new GraphQLNonNull(GraphQLFloat) },
      date_of_joining: { type: new GraphQLNonNull(GraphQLString) },
      department: { type: new GraphQLNonNull(GraphQLString) },
      employee_photo: { type: GraphQLString },
    },
    async resolve(_, args) {
      const newEmployee = new Employee(args);
      return await newEmployee.save();
    },
  },
};

module.exports = { employeeQueries, employeeMutations };
