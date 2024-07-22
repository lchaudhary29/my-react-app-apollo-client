import { ApolloCache } from "@apollo/client";
import {
  LocalEmployeesDocument,
  LocalEmployeesQuery,
  EmployeeInput,
} from "./generated/graphql"; // Adjust path as needed

// Resolver type definitions
type ResolverContext = {
  cache: ApolloCache<any>;
};

export const resolvers = {
  Query: {
    employees: (_, __, { cache }: ResolverContext) => {
      // Read local cache
      const data = cache.readQuery<LocalEmployeesQuery>({
        query: LocalEmployeesDocument,
      });
      return data?.employees || [];
    },
  },
  Mutation: {
    createEmployee: (
      _,
      { employee }: { employee: EmployeeInput },
      { cache }: ResolverContext
    ) => {
      // Read the current employees from the cache
      const existingEmployees =
        cache.readQuery<LocalEmployeesQuery>({
          query: LocalEmployeesDocument,
        })?.employees || [];

      // Create new employee
      const newEmployee = {
        __typename: "Employee",
        ...employee,
      };

      // Update the cache with the new employee
      cache.writeQuery({
        query: LocalEmployeesDocument,
        data: {
          employees: [...existingEmployees, newEmployee],
        },
      });

      return newEmployee;
    },
    updateEmployee: (
      _,
      { employee }: { employee: EmployeeInput },
      { cache }: ResolverContext
    ) => {
      // Read the current employees from the cache
      const existingEmployees =
        cache.readQuery<LocalEmployeesQuery>({
          query: LocalEmployeesDocument,
        })?.employees || [];

      // Update the employee
      const updatedEmployee = {
        __typename: "Employee",
        ...employee,
      };

      // Replace the updated employee in the cache
      const updatedEmployees = existingEmployees.map((emp) =>
        emp.id === employee.id ? updatedEmployee : emp
      );

      // Write the updated list back to the cache
      cache.writeQuery({
        query: LocalEmployeesDocument,
        data: {
          employees: updatedEmployees,
        },
      });

      return updatedEmployee;
    },
    deleteEmployee: (_, { id }: { id: string }, { cache }: ResolverContext) => {
      // Read the current employees from the cache
      const existingEmployees =
        cache.readQuery<LocalEmployeesQuery>({
          query: LocalEmployeesDocument,
        })?.employees || [];

      // Filter out the deleted employee
      const filteredEmployees = existingEmployees.filter(
        (emp) => emp.id !== id
      );

      // Write the updated list back to the cache
      cache.writeQuery({
        query: LocalEmployeesDocument,
        data: {
          employees: filteredEmployees,
        },
      });

      return true; // Return a success flag
    },
  },
};
