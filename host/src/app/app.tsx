import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Dashboard = React.lazy(() => import('dashboard/Module'));

const InventoryAtm = React.lazy(() => import('inventory-atm/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/inventory-atm">InventoryAtm</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/inventory-atm" element={<InventoryAtm />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
