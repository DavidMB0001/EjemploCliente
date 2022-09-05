import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache()
});
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
// const client = ...
// Supported in React 18+

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
