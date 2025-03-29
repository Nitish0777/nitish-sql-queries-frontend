import { history } from "../assets/image";

const QueryHistory = ({ queries, onSelectQuery, selectedQuery }) => {
  return (
    <div className="query-history">
      <div className="history-header">
        <img src={history} alt="Run Query" width={16} height={16} />
        <h3>Available Queries</h3>
      </div>
      <select
        className="history-dropdown"
        value={selectedQuery || ""}
        onChange={(e) => onSelectQuery(e.target.value)}
      >
        <option value="" disabled>
          Select a query...
        </option>
        {queries.slice(0, 5).map((query, index) => (
          <option key={index} value={query}>
            {query.length > 50 ? `${query.substring(0, 50)}...` : query}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QueryHistory;
