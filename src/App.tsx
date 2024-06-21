import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Booking from './components/Booking';
import Room from './components/Room';
import Customer from './components/Customer';
import Employee from './components/Employee';
import Supplier from './components/Supplier';

const App = () => {

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Dashboard/>
                    }
                />
                <Route
                    path="/booking"
                    element={
                        <Booking/>
                    }
                />
                <Route
                    path="/room"
                    element={
                        <Room/>
                    }
                />
                <Route
                    path="/customer"
                    element={
                        <Customer/>
                    }
                />
                <Route
                    path="/employee"
                    element={
                        <Employee/>
                    }
                />
                <Route
                    path="/supplier"
                    element={
                        <Supplier/>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
