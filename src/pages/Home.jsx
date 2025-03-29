import React, { useState } from "react";
import QueryEditor from "../components/QueryEditor";
import ResultTable from "../components/ResultTable";
import QueryHistory from "../components/QueryHistory";
import queryResult from "../assets/json/queryResult.json"; 

const predefinedQueries = queryResult.products.queries.map((q) => q.query);

const Home = () => {
  const [queryResults, setQueryResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(predefinedQueries[0]);

  const handleExecuteQuery = (query) => {
    console.log("Executing query:", query);
    setLoading(true);

    const result = queryResult.products.queries.find((q) => q.query === query);

    setTimeout(() => {
      setQueryResults(result ? result.data : []);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <QueryHistory
          queries={predefinedQueries}
          onSelectQuery={(query) => setCurrentQuery(query)} 
          selectedQuery={currentQuery}
        />
      </div>
      <div className="main-content">
        <QueryEditor
          onExecuteQuery={handleExecuteQuery}
          currentQuery={currentQuery} 
          onQueryChange={setCurrentQuery}
          predefinedQueries={predefinedQueries} 
        />
        <ResultTable data={queryResults} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
