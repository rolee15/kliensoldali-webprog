import { BrowserRouter, Route, Routes } from "react-router-dom";
import GraphiLogics from "./graphilogics/Graphilogics";
import { RequireAuth } from "./auth/RequireAuth";
import { Layout } from "./layout/Layout";
import { Login } from "./auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <GraphiLogics />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
