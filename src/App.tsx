import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Booking from "./components/Booking";
import Supplier from "./components/Supplier";
import Login from "./login/Login";
import Hotels from "./components/Hotel";
import UserAdmin from "./components/UserAdmin";
import Category from "./components/Category";
import AddHotel from "./pages/addHotel";
import EditHotel from "./pages/editHotel";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
              <Login />
          }
        />
        <Route 
          path="/dashboard" 
          element={
            <Dashboard />
          } 
          />
        <Route 
          path="/booking" 
          element={
            <Booking />
          } 
          />
        <Route 
          path="/hotels" 
          element={
            <Hotels />
          } 
          />
        <Route 
          path="/hotels/addhotel" 
          element={
            <AddHotel />
          } 
        />
        <Route 
          path="/hotels/edithotel/:hotelId" 
          element={
            <EditHotel />
          } 
        />
        <Route 
          path="/categories" 
          element={
            <Category />
          } 
          />
        <Route 
          path="/users" 
          element={
            <UserAdmin />
          } 
          />
        <Route 
          path="/supplier" 
          element={
            <Supplier />
          } 
          />
      </Routes>
    </Router>
  );
};

export default App;
