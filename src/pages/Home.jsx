import React, { useState } from "react";
import QueryEditor from "../components/QueryEditor";
import ResultTable from "../components/ResultTable";
import QueryHistory from "../components/QueryHistory";
import productsData from "../assets/json/product.json";

const predefinedQueries = [
  "SELECT * FROM products;",
  "SELECT productName, unitPrice, unitsInStock FROM products WHERE discontinued = 0;",
  "SELECT productName, quantityPerUnit, unitPrice FROM products WHERE categoryID = 1;",
  "SELECT productName, unitPrice FROM products WHERE unitsInStock < 20 ORDER BY unitPrice DESC;",
  "SELECT productName, unitsInStock, reorderLevel FROM products WHERE unitsInStock <= reorderLevel;",
];

const Home = () => {
  const [queryResults, setQueryResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(predefinedQueries[0]);

  const handleExecuteQuery = (query) => {
    console.log("Executing query:", query);
    setLoading(true);
    setTimeout(() => {
      setQueryResults(productsData);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <QueryHistory
          queries={predefinedQueries}
          onSelectQuery={setCurrentQuery}
          selectedQuery={currentQuery}
        />
      </div>
      <div className="main-content">
        <QueryEditor
          onExecuteQuery={handleExecuteQuery}
          currentQuery={currentQuery}
          onQueryChange={setCurrentQuery}
        />
        <ResultTable data={queryResults} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
