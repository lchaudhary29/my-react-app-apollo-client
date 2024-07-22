import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { resolvers } from "./resolvers";
import { Employee } from "./types"; // Import the Employee type

// Initial state for local employees with type annotation
const initialEmployees: Employee[] = [];

// Create a reactive variable with the Employee type
const employeesVar = makeVar<Employee[]>(initialEmployees);

// Configure cache with type policies
const cache = new InMemoryCache({
  // typePolicies: {
  //   Query: {
  //     fields: {
  //       employees: {
  //         read() {
  //           return employeesVar();
  //         },
  //       },
  //     },
  //   },
  // },
});

// Create Apollo Client
const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api", // Remote GraphQL endpoint
  cache,
  resolvers, // Include resolvers for local state management
});

export default client;
