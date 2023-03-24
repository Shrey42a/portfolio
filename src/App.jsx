import { Route, Routes } from "react-router-dom";
import All from "./All";
import More from "./More";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<All />}></Route>
        <Route path="/more" element={<More />}></Route>
      </Routes>
    </>
  );
}
export default App;
