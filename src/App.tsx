import React from 'react';
import './App.css';
import {AppContainer} from "./app.container";
import {ApolloProvider} from "@apollo/client";
import {makeApiClient} from "./api";

function App() {
  return (
      <ApolloProvider client={makeApiClient()}>
        <AppContainer/>
      </ApolloProvider>
  );
}

export default App;
