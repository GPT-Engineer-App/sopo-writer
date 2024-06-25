import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SOPTool from "./pages/SOPTool.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/sop-tool" element={<SOPTool />} />
      </Routes>
    </Router>
  );
}

export default App;