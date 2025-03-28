import { history } from "../assets/image";

const QueryHistory = ({ queries, onSelectQuery, selectedQuery }) => {
  return (
    <div className="query-history">
      <div className="history-header">
        <img src={history} alt="Run Query" width={16} height={16} />
        <h3>Available Queries</h3>
      </div>
      <div className="history-list">
        {queries.map((query, index) => (
          <button
            key={index}
            className={`history-item ${
              query === selectedQuery ? "selected" : ""
            }`}
            onClick={() => onSelectQuery(query)}
          >
            {query.length > 50 ? `${query.substring(0, 50)}...` : query}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QueryHistory;
