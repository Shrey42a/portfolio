import { Route, Routes } from "react-router-dom";
import All from "./All";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<All />}></Route>
      </Routes>
    </>
  );7
}
export default App;
