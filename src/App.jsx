import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <h1 onClick={notify}>
        Atlan Sql queries frontend Project folder structure setup
      </h1>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
