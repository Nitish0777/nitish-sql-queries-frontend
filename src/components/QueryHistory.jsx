import { history } from "../assets/image";

const QueryHistory = ({ queries, onSelectQuery, selectedQuery }) => {
  return (
    <div
      className="query-history"
      style={{ width: "300px", overflow: "hidden" }}
    >
      <div className="history-header">
        <img src={history} alt="Run Query" width={16} height={16} />
        <h3>Available Queries</h3>
      </div>
      <div className="history-list" style={{ width: "100%" }}>
        <select
          className="query-dropdown"
          value={selectedQuery}
          onChange={(e) => onSelectQuery(e.target.value)}
        >
          {queries.map((query, index) => (
            <option key={index} value={query}>
              {query.length > 50 ? `${query.substring(0, 50)}...` : query}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default QueryHistory;
