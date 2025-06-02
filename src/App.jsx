import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./style.scss"
import style from "./App.scss"

function App() {
  return (
    <BrowserRouter>
        <Layout/>
    </BrowserRouter>
  );
}

export default App;
