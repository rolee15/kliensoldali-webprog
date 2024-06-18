import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./view/layout/Layout";
import { Login } from "./view/pages/Login";
import { Register } from "./view/pages/Register";
import { RequireAuth } from "./view/auth/RequireAuth";
import { JobListings } from "./view/pages/JobListings";
import { Profile } from "./view/pages/Profile";
import { JobDetails } from "./view/pages/JobDetails";
import { NewJobListing } from "./view/pages/NewJobListing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<JobListings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/jobs/:id"
            element={
              <RequireAuth>
                <JobDetails />
              </RequireAuth>
            }
          />
          <Route
            path="/create-job"
            element={
              <RequireAuth>
                <NewJobListing />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
