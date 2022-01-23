import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const CHAINS = gql`
  query EmapleQuery {
    chains {
      total
      chains {
        chain_id
        name
        description
      }
    }
  }
`;

function App() {
  const {
    loading,
    error,
    data: { chains },
  } = useQuery(CHAINS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <pre>{JSON.stringify(chains, null, 2)}</pre>
    </div>
  );
}

export default App;
