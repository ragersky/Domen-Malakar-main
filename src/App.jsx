import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./Hooks/ScrollTop";
import Router from "./Router/Router";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
