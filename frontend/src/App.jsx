import LoginPage from "../pages/LoginPage";
import HolidaysPage from "../pages/HolidaysPage";
import HolidaysDetailsPage from "../pages/HolidaysDetailsPage";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/holidays" element={<HolidaysPage />}>
            <Route path="/holidays/:id" element={<HolidaysDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
