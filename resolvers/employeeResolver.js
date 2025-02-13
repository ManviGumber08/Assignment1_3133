const { GraphQLList, GraphQLID, GraphQLString, GraphQLFloat } = require("graphql");
const Employee = require("../models/Employee");
const EmployeeType = require("../types/EmployeeType");

const employeeQueries = {
    getEmployees: {
        type: new GraphQLList(EmployeeType), // Returns a list of Employees
        resolve: async () => await Employee.find()
    },
    getEmployeeById: {
        type: EmployeeType, // Returns a single Employee
        args: { id: { type: GraphQLID } }, // Takes an ID as input
        resolve: async (_, { id }) => await Employee.findById(id)
    }
};

const employeeMutations = {
    addEmployee: {
        type: EmployeeType,
        args: {
            first_name: { type: GraphQLString },
            last_name: { type: GraphQLString },
            email: { type: GraphQLString },
            gender: { type: GraphQLString },
            designation: { type: GraphQLString },
            salary: { type: GraphQLFloat },
            date_of_joining: { type: GraphQLString },
            department: { type: GraphQLString },
            employee_photo: { type: GraphQLString }
        },
        resolve: async (_, args) => {
            const newEmployee = new Employee(args);
            return await newEmployee.save();
        }
    },
    updateEmployee: {
        type: EmployeeType,
        args: {
            id: { type: GraphQLID },
            salary: { type: GraphQLFloat }
        },
        resolve: async (_, { id, salary }) => {
            return await Employee.findByIdAndUpdate(id, { salary }, { new: true });
        }
    },
    deleteEmployee: {
        type: GraphQLString, // Returns a string message
        args: { id: { type: GraphQLID } },
        resolve: async (_, { id }) => {
            await Employee.findByIdAndDelete(id);
            return "Employee deleted successfully!";
        }
    }
};

module.exports = { employeeQueries, employeeMutations };
