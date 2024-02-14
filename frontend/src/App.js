import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RenderRoutes } from "./config/routes";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <RenderRoutes />
      </Layout>
    </Router>
  );
}

export default App;
