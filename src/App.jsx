import { BrowserRouter } from "react-router-dom";
import CssImports from "styles/CssImports";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <CssImports />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
