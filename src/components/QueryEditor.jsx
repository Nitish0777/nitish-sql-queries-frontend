import { run } from "../assets/image";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";

const QueryEditor = ({ onExecuteQuery, currentQuery, onQueryChange }) => {
  const handleExecute = () => {
    onExecuteQuery(currentQuery);
  };

  return (
    <div className="query-editor">
      <div className="editor-header">
        <h2>SQL Editor</h2>
        <button className="execute-btn" onClick={handleExecute}>
          <img src={run} alt="Run Query" width={16} height={16} />
          Run Query
        </button>
      </div>
      <div className="editor-container">
        <CodeMirror
          value={currentQuery}
          height="200px"
          theme={oneDark}
          extensions={[sql()]}
          onChange={onQueryChange}
          className="code-mirror-wrapper"
        />
      </div>
    </div>
  );
};

export default QueryEditor;
