import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    "https://graphqlzero.almansi.me/api", // Remote schema
    "./src/graphql/local.graphql", // Local schema
  ],
  documents: "./src/**/*.graphql",
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
        withMutationFn: true,
      },
    },
  },
};

export default config;
