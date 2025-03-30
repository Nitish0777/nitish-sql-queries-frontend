import React, { useState } from "react";
import QueryEditor from "../components/QueryEditor";
import ResultTable from "../components/ResultTable";
import QueryHistory from "../components/QueryHistory";
import queryResult from "../assets/json/queryResult.json";
import productData from "../assets/json/product.json";

const predefinedQueries = queryResult.products.queries.map((q) => q.query);

const Home = () => {
  const [queryResults, setQueryResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(predefinedQueries[0]);
  const [hasExecutedQuery, setHasExecutedQuery] = useState(false);

  const handleExecuteQuery = (query) => {
    console.log("Executing query:", query);
    setLoading(true);
    setHasExecutedQuery(true);

    const result = queryResult.products.queries.find((q) => q.query === query);

    setTimeout(() => {
      setQueryResults(result ? result.data : []);
      setLoading(false);
    }, 500);
  };

  const handleShowAllProducts = () => {
    setQueryResults(productData);
    setHasExecutedQuery(true);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <QueryHistory
          queries={predefinedQueries}
          onSelectQuery={(query) => setCurrentQuery(query)}
          selectedQuery={currentQuery}
          showPieChart={hasExecutedQuery}
          onShowAllProducts={handleShowAllProducts}
        />
      </div>
      <div className="main-content">
        <QueryEditor
          onExecuteQuery={handleExecuteQuery}
          currentQuery={currentQuery}
          onQueryChange={setCurrentQuery}
          predefinedQueries={predefinedQueries}
        />
        {!hasExecutedQuery && queryResults.length === 0 && !loading ? (
          <div className="no-data">Run Query to see Results</div>
        ) : (
          <ResultTable data={queryResults} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default Home;
