import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Teams from './components/Teams';
import Shifts from './components/Shifts';
import Staff from './components/Staff';
import RoleAssignment from './components/RoleAssignment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Teams />} />
        <Route path="/shifts/:teamId" element={<Shifts />} />
        <Route path="/staff/:teamId/:shift" element={<Staff />} />
        <Route path="/assign-roles" element={<RoleAssignment />} />
      </Routes>
    </Router>
  );
}

export default App;